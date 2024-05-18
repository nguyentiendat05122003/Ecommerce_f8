import http from "@/lib/http";

const accountRequestApi = {
  me: (accessToken, clientId) =>
    http.get("users/me", {
      headers: {
        access_token: `Bearer ${accessToken}`,
        client_id: `${clientId}`,
      },
    }),
  updateMe: (body, accessToken, clientId) =>
    http.patch("users/updateMe", body, {
      headers: {
        access_token: `Bearer ${accessToken}`,
        client_id: `${clientId}`,
      },
    }),
};
export default accountRequestApi;
