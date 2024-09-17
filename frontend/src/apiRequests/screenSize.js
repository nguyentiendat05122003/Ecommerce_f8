import http from "@/lib/http";

const screenSizeApiRequest = {
  getAll: () => http.get(`/screenSize`),
};

export default screenSizeApiRequest;
