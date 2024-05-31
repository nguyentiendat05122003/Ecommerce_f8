import http from "@/lib/http";

const paymentApiRequest = {
  createPayment: (clientId, body) =>
    http.post("/payment", body, { client_id: clientId }),
};

export default paymentApiRequest;
