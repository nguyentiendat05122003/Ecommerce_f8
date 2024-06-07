import http from "@/lib/http";

const diskApiRequest = {
  getAll: () => http.get(`/disk`),
};

export default diskApiRequest;
