import http from "@/lib/http";

const statisticalApiRequest = {
  getTotalAmount: () => http.get(`/statistical/totalAmount`),
  getMonthlyRevenue: (year) => http.get(`/statistical/monthlyRevenue/${year}`),
};

export default statisticalApiRequest;
