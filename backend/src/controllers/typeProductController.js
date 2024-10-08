import { StatusCodes } from "http-status-codes";
import { typeProductService } from "~/services/typeProductService";
import AppResponse from "~/utils/AppResponse";
import { uploadImageTypeProduct } from "~/utils/Upload";

const createTypeProduct = async (req, res, next) => {
  if (req.file) {
    const path = await uploadImageTypeProduct({ path: req.file.path });
    req.body.thumb = path;
  }
  return new AppResponse({
    message: "create type of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeProductService.createTypeProduct(req),
  }).send(res);
};

const getTypeProduct = async (req, res, next) => {
  return new AppResponse({
    message: "get info type of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeProductService.getTypeProduct(req),
  }).send(res);
};

const getAllTypeProducts = async (req, res, next) => {
  return new AppResponse({
    message: "get info list type of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeProductService.getAllTypeProduct(req),
  }).send(res);
};

const updateTypeProduct = async (req, res, next) => {
  return new AppResponse({
    message: "update info type of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeProductService.updateTypeProduct(req),
  }).send(res);
};

const deleteTypeProduct = async (req, res, next) => {
  return new AppResponse({
    message: "delete type of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeProductService.deleteOneTypeProduct(req),
  }).send(res);
};

export const typeProductController = {
  getTypeProduct,
  getAllTypeProducts,
  updateTypeProduct,
  deleteTypeProduct,
  createTypeProduct,
};
