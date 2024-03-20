export const SetCookieAndSetData = (res, data) => {
    const { accessToken, refreshToken } = data.tokens
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
    });
    return {
        user: data.user,
        token: accessToken
    }
}
