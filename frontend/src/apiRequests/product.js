import http from "@/lib/http";

const productApiRequest = {
  getAllProducts: () => http.get("/products"),
  getProduct: (id) => http.get(`products/${id}`),
};

export default productApiRequest;
