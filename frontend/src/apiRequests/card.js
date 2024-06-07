import http from "@/lib/http";

const cardApiRequest = {
  getAll: () => http.get(`/card`),
};

export default cardApiRequest;
