import http from "@/lib/http";

const specialFeaturesApiRequest = {
  getAll: () => http.get(`/specialFeatures`),
};

export default specialFeaturesApiRequest;
