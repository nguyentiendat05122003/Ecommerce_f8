import http from "@/lib/http";

const deliveryAddressApiRequest = {
  getDeliveryAddress: (id) =>
    http.get(`/deliveryAddress/${id}`, { cache: "no-store" }),
  createDeliveryAddress: (body) => http.post("/deliveryAddress", body),
  updateDeliveryAddress: (id, body) =>
    http.patch(`/deliveryAddress/${id}`, body),
};

export default deliveryAddressApiRequest;
