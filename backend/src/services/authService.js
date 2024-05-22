import User from "~/models/user.model";
import { keyTokenService } from "./keyTokenService";
import getInfoData from "~/utils/getInfoData";
import crypto from "crypto";
import AppError from "~/utils/AppError";
import KeyToken from "~/models/keyToken.model";
import { Email } from "~/utils/email";
const createSendToken = async (user) => {
  const { _id, email } = user;
  const privateKey = crypto.randomBytes(64).toString("hex");
  const publicKey = crypto.randomBytes(64).toString("hex");
  const tokens = keyTokenService.createTokenPair(
    { userId: _id, email },
    publicKey,
    privateKey
  );
  const { accessToken, refreshToken } = tokens;
  const keyStore = keyTokenService.updateKeyAndToken(
    _id,
    publicKey,
    privateKey,
    refreshToken
  );
  return tokens;
};

const signUp = async (reqBody) => {
  const newUser = await User.create({
    name: reqBody.name,
    email: reqBody.email,
    password: reqBody.password,
    passwordConfirm: reqBody.passwordConfirm,
    role: reqBody.role,
  });
  newUser.password = undefined;
  await new Email(newUser, "url").sendWelcome();
  return newUser;
};

const login = async (reqBody) => {
  const { email, password } = reqBody;

  if (!email || !password) {
    throw new AppError("Please provide email and password!", 400);
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    throw new AppError("Incorrect email or password", 401);
  }
  const tokens = await createSendToken(user);
  return {
    user: getInfoData(user, ["_id", "name", "email", "photo"]),
    tokens,
  };
};

const refreshToken = async (req) => {
  const refreshToken = req.cookies.refreshToken;
  const { userId, email } = req.user;
  const keyToken = req.keyToken;
  if (!refreshToken)
    throw new AppError(
      "You are not logged in! Please log in to get access.",
      401
    );
  if (keyToken.refreshTokensUsed.includes(refreshToken)) {
    await KeyToken.deleteOne({ refreshToken: refreshToken });
    throw new AppError("Something wrong, Please login again", 401);
  }
  if (keyToken.refreshToken !== refreshToken) {
    throw new AppError(
      "You are not logged in! Please log in to get access.",
      401
    );
  }
  const foundUser = await User.findOne({ email: email });
  if (!foundUser) {
    throw new AppError("User not found", 404);
  }
  const holderToken = await KeyToken.findOne({ refreshToken: refreshToken });
  const tokens = await keyTokenService.createTokenPair(
    { userId, email },
    holderToken.publicKey,
    holderToken.privateKey
  );
  await holderToken.updateOne({
    $set: {
      refreshToken: tokens.refreshToken,
    },
    $addToSet: {
      refreshTokensUsed: refreshToken,
    },
  });
  return {
    user: { userId, email },
    tokens,
  };
};

const logOut = async (req) => {
  console.log(req.cookies);
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    throw new AppError(
      "You are not logged in! Please log in to get access.",
      401
    );
  const foundToken = await KeyToken.findOne({ refreshToken: refreshToken });
  if (!foundToken) {
    throw new AppError("Token not valid", 400);
  } else {
    await KeyToken.deleteOne({ refreshToken: refreshToken });
  }
};

const updatePassword = async (req) => {
  const user = await User.findById(req.user.id).select("+password");

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    throw new AppError("Your current password is wrong.", 401);
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  const tokens = await createSendToken(user);
  return {
    user: getInfoData(user, ["_id", "name", "email"]),
    tokens,
  };
};

const forgotPassword = async (req) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new AppError("There is no user with email address.", 404);
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  try {
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();
    return {
      status: "success",
      message: "Token sent to email!",
    };
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
};

const resetPassword = async (req) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    throw new AppError("Token is invalid or has expired", 400);
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  const tokens = await createSendToken(user);
  return {
    user: getInfoData(user, ["_id", "name", "email"]),
    tokens,
  };
};

export const authService = {
  signUp,
  login,
  refreshToken,
  logOut,
  updatePassword,
  forgotPassword,
  resetPassword,
};
