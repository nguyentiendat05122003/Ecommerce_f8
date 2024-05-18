import http, { clientSessionToken } from "@/lib/http";

const authApiRequest = {
  auth: (body) =>
    http.post("/api/auth", body, {
      baseUrl: "",
    }),
  login: (body) => http.post("/users/login", body, { credentials: "include" }),
  register: (body) => http.post("/users/register", body),
  logout: (accessToken) =>
    http.post("/users/logout", null, {
      headers: {
        access_token: `Bearer ${accessToken}`,
      },
    }),
  refresh: (accessToken) =>
    http.post("/users/refreshToken", null, {
      headers: {
        access_token: `Bearer ${accessToken}`,
      },
    }),
};

export default authApiRequest;
