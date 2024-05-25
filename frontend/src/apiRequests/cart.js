import http from "@/lib/http";

const cartApiRequest = {
  getCart: (id) => http.get(`/cart/${id}`),
  addProductInCart: (body) => http.post("/cart", body),
  updateProductInCart: (userId, body) => http.patch(`/cart/${userId}`, body),
  deleteProductInCart: (userId, productId) =>
    http.delete(`/cart/${userId}`, { productId: productId }),
};

export default cartApiRequest;
