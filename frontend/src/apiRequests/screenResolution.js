import http from "@/lib/http";

const screenResolutionApiRequest = {
  getAll: () => http.get(`/screenResolution`),
};

export default screenResolutionApiRequest;
