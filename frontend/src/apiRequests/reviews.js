const { default: http } = require("@/lib/http");

const reviewApiRequest = {
  getAllReview: () => http.get("/review"),
  createReview: (body) => http.post("/review", body),
  deleteReview: (id) => http.delete(`/review/${id}`),
};
export default reviewApiRequest;
