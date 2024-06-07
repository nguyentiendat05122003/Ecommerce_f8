import http from "@/lib/http";

const screenApiRequest = {
  getAll: () => http.get(`/screens`),
};

export default screenApiRequest;
