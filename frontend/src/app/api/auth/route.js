export async function POST(request) {
  const body = await request.json();
  const accessToken = body.accessToken;
  const refreshToken = body.refreshToken;
  const clientId = body.clientId;
  const { accessTokenExpires, clientIdExpires, refreshTokenExpires } =
    body?.expiresAt;
  if (!accessToken) {
    return Response.json(
      { message: "Không nhận được session token" },
      {
        status: 400,
      }
    );
  }
  return Response.json(body, {
    status: 200,
    headers: {
      "Set-Cookie": [
        `accessToken=${accessToken}; Path=/; HttpOnly; Secure; Expires=${accessTokenExpires}`,
        `clientId=${clientId}; Path=/; HttpOnly; Secure; Expires=${clientIdExpires}`,
        `refreshToken=${refreshToken}; Path=/; HttpOnly; Secure; Expires=${refreshTokenExpires}`,
      ].join(", "),
    },
  });
}
