import SupplierInvoice from "~/models/supplierInvoice.model";
import { factory } from "./handlerFactory";

const getSupplierInvoice = factory.getOne(SupplierInvoice);
const createSupplierInvoice = factory.createOne(SupplierInvoice);
const getAllSupplierInvoice = factory.getAll(SupplierInvoice);
const updateSupplierInvoice = factory.updateOne(SupplierInvoice);
const deleteOneSupplierInvoice = factory.deleteOne(SupplierInvoice);

export const supplierInvoiceService = {
  getSupplierInvoice,
  getAllSupplierInvoice,
  updateSupplierInvoice,
  deleteOneSupplierInvoice,
  createSupplierInvoice,
};
