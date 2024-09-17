import http from "@/lib/http";

const userApiRequest = {
  getUserRoleUser: () => http.get("/users?role=user"),
  getAll: () => http.get("/users"),
};

export default userApiRequest;
