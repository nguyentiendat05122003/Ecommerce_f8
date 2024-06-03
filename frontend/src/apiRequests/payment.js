import http from "@/lib/http";

const paymentApiRequest = {
  createPayment: (body) => http.post("/payment", body),
  getPayment: (userId) => http.get(`/payment/user/${userId}`),
  updatePayment: (paymentId, body) => http.patch(`/payment/${paymentId}`, body),
  checkUserPurchase: (userId, productId) =>
    http.get(`/payment/checkUserPurchase/${userId}/${productId}`),
};

export default paymentApiRequest;
