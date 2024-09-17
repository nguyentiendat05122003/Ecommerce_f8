import http from "@/lib/http";

const TypeRamApiRequest = {
  getAll: () => http.get("/typeRam"),
};

export default TypeRamApiRequest;
