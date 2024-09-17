import http from "@/lib/http";

const productApiRequest = {
  getProduct: (id) => http.get(`/products/${id}`, { cache: "no-store" }),
  getAllProductsFull: () => http.get(`/products`),
  getAllProducts: (filters, sortPrice) =>
    http.get(`/products/?active=1&sort=${sortPrice}&${filters}`),
  getAllProductsPagination: ({ page, limit, search }) =>
    http.get(`/products/?page=${page}&limit=${limit}&name=${search}`),
  createProduct: (body) => http.post("/products", body),
  updateProduct: (body, productId) =>
    http.patch(`/products/${productId}`, body),
  deleteProduct: (productId) => http.delete(`products/${productId}`),
};

export default productApiRequest;
