import http from "@/lib/http";

const providerApiRequest = {
  getAll: () => http.get(`/provider`),
};

export default providerApiRequest;
