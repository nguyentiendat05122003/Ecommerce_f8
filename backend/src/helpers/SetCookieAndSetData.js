import { addMilliseconds } from "date-fns";
import ms from "ms";

export const SetCookieAndSetData = (res, data) => {
  const accessTokenExpires = new Date(Date.now() + 2 * 24 * 3600000);
  const refreshTokenExpires = new Date(Date.now() + 5 * 24 * 3600000);
  const clientIdExpires = new Date(Date.now() + 10 * 24 * 3600000);
  const { accessToken, refreshToken } = data.tokens;
  res.cookie("refreshToken", refreshToken, {
    expires: refreshTokenExpires,
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  res.cookie("accessToken", accessToken, {
    expires: accessTokenExpires,
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  res.cookie("clientId", data.user._id.toString(), {
    expires: clientIdExpires,
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });

  // const expiresAt = addMilliseconds(new Date(), ms("2day"));
  return {
    user: data.user,
    tokens: data.tokens,
    expiresAt: {
      accessTokenExpires: accessTokenExpires.toUTCString(),
      refreshTokenExpires: refreshTokenExpires.toUTCString(),
      clientIdExpires: clientIdExpires.toUTCString(),
    },
  };
};
