import jwt from "jsonwebtoken";
import KeyToken from "~/models/keyToken.model";
const createTokenPair = (payload, publicKey, privateKey) => {
  const accessToken = jwt.sign(payload, publicKey, { expiresIn: "2day" });
  const refreshToken = jwt.sign(payload, privateKey, { expiresIn: "5day" });
  return { accessToken, refreshToken };
};

const updateKeyAndToken = async (
  userId,
  publicKey,
  privateKey,
  refreshToken
) => {
  try {
    const filter = { user: userId };
    const update = {
      publicKey,
      privateKey,
      refreshTokensUsed: [],
      refreshToken,
    };
    const options = { upsert: true, new: true };
    const tokens = await KeyToken.findOneAndUpdate(filter, update, options);
    return tokens ? tokens.publicKey : null;
  } catch (error) {
    console.log(error);
  }
};
export const keyTokenService = { createTokenPair, updateKeyAndToken };
