import http from "@/lib/http";

const cpuApiRequest = {
  getAll: () => http.get(`/cpu`),
};

export default cpuApiRequest;
