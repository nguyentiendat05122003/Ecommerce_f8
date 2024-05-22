const { default: http } = require("@/lib/http");

const commentApiRequest = {
  getComment: (commentId, productId) =>
    http.get(`/comment/${commentId}`, {
      headers: {
        product_Id: productId,
      },
    }),
  getAllComment: () => http.get(`/comment`),
  createComment: (body) => http.post(`/comment`, body),
  deleteComment: (id, productId) =>
    http.delete(`/comment/${id}`, { productId: productId }),
};
export default commentApiRequest;
