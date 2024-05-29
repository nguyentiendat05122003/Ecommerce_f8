import http from "@/lib/http";

const countryApiRequest = {
  getAllProvince: () =>
    http.get(`/province`, { baseUrl: "https://vapi.vnappmob.com/api" }),
};
export default countryApiRequest;
