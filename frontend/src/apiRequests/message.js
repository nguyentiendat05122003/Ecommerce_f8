import http from "@/lib/http";

const messageApiRequest = {
  getMessage: (userId) => http.get(`/message/user/${userId}`),
  createMessage: (body) => http.post(`/message`, body),
};

export default messageApiRequest;
