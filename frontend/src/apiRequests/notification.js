import http from "@/lib/http";

const notificationApiRequest = {
  getNotification: () => http.get(`/notification`),
  createNotification: (body) => http.post(`/notification`, body),
  deleteNotification: (id) => http.delete(`/notification/${id}`),
};

export default notificationApiRequest;
