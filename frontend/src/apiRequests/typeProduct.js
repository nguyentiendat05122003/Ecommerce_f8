import http from "@/lib/http";

const TypeProductApiRequest = {
  getAllTypeProduct: () => http.get("/typeProducts"),
};

export default TypeProductApiRequest;
