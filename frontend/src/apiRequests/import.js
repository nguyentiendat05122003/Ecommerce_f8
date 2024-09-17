import http from "@/lib/http";

const importApiRequest = {
  getAll: () => http.get(`/supplierInvoice`),
  createImport: (body) => http.post(`/supplierInvoice`, body),
  getDetailImport: (id) => http.get(`/supplierInvoice/${id}`),
};

export default importApiRequest;
