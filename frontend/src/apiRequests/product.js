import http from "@/lib/http";

const productApiRequest = {
  getProduct: (id) => http.get(`/products/${id}`, { cache: "no-store" }),
  getAllProducts: () => http.get("/products"),
  createProduct: (body) => http.post("/products", body),
  updateProduct: (body, productId) =>
    http.patch(`/products/${productId}`, body),
  deleteProduct: (productId) => http.delete(`products/${productId}`),
};

export default productApiRequest;
