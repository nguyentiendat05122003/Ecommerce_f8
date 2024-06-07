import http from "@/lib/http";

const paymentApiRequest = {
  createPayment: (body) => http.post("/payment", body),
  getPayment: (userId) => http.get(`/payment/user/${userId}`),
  getDetailPayment: (paymentId) => http.get(`/payment/${paymentId}`),
  getPaymentAll: () => http.get(`/payment`),
  updatePayment: (paymentId, body) => http.patch(`/payment/${paymentId}`, body),
  checkUserPurchase: (userId, productId) =>
    http.get(`/payment/checkUserPurchase/${userId}/${productId}`),
};

export default paymentApiRequest;
