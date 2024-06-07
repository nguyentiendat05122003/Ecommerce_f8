import http from "@/lib/http";

const typeBrandApiRequest = {
  getTypeBrands: (id) => http.get(`/typeBrand/${id}`),
};

export default typeBrandApiRequest;
