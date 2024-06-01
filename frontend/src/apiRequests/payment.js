import http from "@/lib/http";

const paymentApiRequest = {
  createPayment: (body) => http.post("/payment", body),
  getAllPayment: () => http.get("/payment"),
  updatePayment: (paymentId, body) => http.patch(`/payment/${paymentId}`, body),
  checkUserPurchase: (userId, productId) =>
    http.get(`/payment/checkUserPurchase/${userId}/${productId}`),
};

export default paymentApiRequest;
