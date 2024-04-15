import { StatusCodes } from "http-status-codes";
import { supplierInvoiceService } from "~/services/supplierInvoiceService";
import AppResponse from "~/utils/AppResponse";

const createSupplierInvoice = async (req, res, next) => {
  console.log(req.body);
  return new AppResponse({
    message: "create SupplierInvoice of product success",
    statusCode: StatusCodes.OK,
    metadata: await supplierInvoiceService.createSupplierInvoice(req),
  }).send(res);
};

const getSupplierInvoice = async (req, res, next) => {
  return new AppResponse({
    message: "get info SupplierInvoice of product success",
    statusCode: StatusCodes.OK,
    metadata: await supplierInvoiceService.getSupplierInvoice(req),
  }).send(res);
};

const getAllSupplierInvoices = async (req, res, next) => {
  return new AppResponse({
    message: "get info list SupplierInvoice of product success",
    statusCode: StatusCodes.OK,
    metadata: await supplierInvoiceService.getAllSupplierInvoice(req),
  }).send(res);
};

const updateSupplierInvoice = async (req, res, next) => {
  return new AppResponse({
    message: "update info SupplierInvoice of product success",
    statusCode: StatusCodes.OK,
    metadata: await supplierInvoiceService.updateSupplierInvoice(req),
  }).send(res);
};

const deleteSupplierInvoice = async (req, res, next) => {
  return new AppResponse({
    message: "delete SupplierInvoice of product success",
    statusCode: StatusCodes.OK,
    metadata: await supplierInvoiceService.deleteOneSupplierInvoice(req),
  }).send(res);
};

export const supplierInvoiceController = {
  getSupplierInvoice,
  getAllSupplierInvoices,
  updateSupplierInvoice,
  deleteSupplierInvoice,
  createSupplierInvoice,
};
