import http from "@/lib/http";

const ramApiRequest = {
  getAll: () => http.get(`/ram`),
};

export default ramApiRequest;
