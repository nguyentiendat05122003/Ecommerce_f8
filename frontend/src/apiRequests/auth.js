import http from "@/lib/http";

const authApiRequest = {
  login: (body) => http.post("/users/login", body, { credentials: "include" }),
  register: (body) => http.post("/users/register", body),
  logoutFromNextServerToServer: () =>
    http.post("/users/logout", null, {
      credentials: "include",
      withCredentials: true,
    }),
};

export default authApiRequest;
