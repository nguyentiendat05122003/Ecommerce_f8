import { StatusCodes } from "http-status-codes";
import { SetCookieAndSetData } from "~/helpers/SetCookieAndSetData";
import KeyToken from "~/models/keyToken.model";
import User from "~/models/user.model";
import { authService } from "~/services/authService";
import AppError from "~/utils/AppError";
import AppResponse from "~/utils/AppResponse";
import catchAsync from "~/utils/catchAsync";
import JWT from "jsonwebtoken";

const signUp = async (req, res, next) => {
  return new AppResponse({
    message: "Register success",
    statusCode: StatusCodes.CREATED,
    metadata: await authService.signUp(req.body),
  }).send(res);
};

const login = async (req, res, next) => {
  const data = await authService.login(req.body);
  const newData = SetCookieAndSetData(res, data);
  return new AppResponse({
    message: "login success",
    statusCode: StatusCodes.OK,
    metadata: newData,
  }).send(res);
};

const refreshToken = async (req, res, next) => {
  const data = await authService.refreshToken(req);
  const newData = SetCookieAndSetData(res, data);
  return new AppResponse({
    message: "refresh token success",
    statusCode: StatusCodes.OK,
    metadata: newData,
  }).send(res);
};

const logOut = async (req, res, next) => {
  await authService.logOut(req);
  res.clearCookie("refreshToken");
  res.clearCookie("accessToken");
  res.clearCookie("clientId");
  return new AppResponse({
    message: "logout success",
    statusCode: StatusCodes.OK,
  }).send(res);
};

const updatePassword = async (req, res, next) => {
  const data = await authService.updatePassword(req);
  const newData = SetCookieAndSetData(res, data);
  return new AppResponse({
    message: "update password success",
    statusCode: StatusCodes.OK,
    metadata: newData,
  }).send(res);
};

const protect = catchAsync(async (req, res, next) => {
  let token;
  const userId = req.cookies.clientId || req.headers.client_id;
  if (!userId) return next(new AppError("Miss userId"));
  const keyToken = await KeyToken.findOne({ user: userId }).lean();
  if (!keyToken) return next(new AppError("User not found"));
  console.log(req.headers);
  const accessToken = req.headers.access_token;
  if (accessToken && accessToken.startsWith("Bearer")) {
    token = accessToken.split(" ")[1];
  }
  console.log(token);
  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }
  JWT.verify(token, keyToken.publicKey, async function (err, decodeUser) {
    if (err) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401
        )
      );
    }
    const currentUser = await User.findById(decodeUser.userId);
    if (!currentUser) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401
        )
      );
    }
    if (currentUser.changedPasswordAfter(decodeUser.iat)) {
      return next(
        new AppError(
          "User recently changed password! Please log in again.",
          401
        )
      );
    }

    req.user = currentUser;
    req.keyToken = keyToken;
    next();
  });
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

const resetPassword = async (req, res, next) => {
  const data = await authService.resetPassword(req);
  console.log(data);
  const newData = SetCookieAndSetData(res, data);
  return new AppResponse({
    message: "reset password success",
    statusCode: StatusCodes.OK,
    metadata: newData,
  }).send(res);
};

const forgotPassword = async (req, res, next) => {
  return new AppResponse({
    statusCode: StatusCodes.OK,
    metadata: await authService.forgotPassword(req),
  }).send(res);
};

export const authController = {
  signUp,
  login,
  refreshToken,
  logOut,
  restrictTo,
  protect,
  updatePassword,
  forgotPassword,
  resetPassword,
};
