import http from "@/lib/http";

const productApiRequest = {
  getProduct: (id) => http.get(`/products/${id}`, { cache: "no-store" }),
  getAllProducts: () => http.get("/products"),
};

export default productApiRequest;
