import http from "@/lib/http";

const notificationApiRequest = {
  getNotification: () => http.get(`/notification`),
  createNotification: (body) => http.post(`/notification`, body),
};

export default notificationApiRequest;
