import http from "@/lib/http";

const BrandApiRequest = {
  getAllBrands: () => http.get("/brandProducts"),
};

export default BrandApiRequest;
