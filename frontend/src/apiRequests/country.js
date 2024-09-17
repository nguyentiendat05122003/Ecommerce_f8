import http from "@/lib/http";

const countryApiRequest = {
  getAllProvince: () =>
    http.get(`/province`, {
      baseUrl: "https://vapi.vnappmob.com/api",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
};
export default countryApiRequest;
