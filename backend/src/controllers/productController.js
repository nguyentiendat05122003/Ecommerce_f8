import { StatusCodes } from "http-status-codes";
import { productService } from "~/services/productService";
import AppResponse from "~/utils/AppResponse";

const createProduct = async (req, res, next) => {
  return new AppResponse({
    message: "create product success",
    statusCode: StatusCodes.OK,
    metadata: await productService.createProduct(req),
  }).send(res);
};

const getProduct = async (req, res, next) => {
  return new AppResponse({
    message: "get info product success",
    statusCode: StatusCodes.OK,
    metadata: await productService.getProduct(req),
  }).send(res);
};

const getAllProducts = async (req, res, next) => {
  return new AppResponse({
    message: "get info list product success",
    statusCode: StatusCodes.OK,
    metadata: await productService.getAllProduct(req),
  }).send(res);
};

const updateProduct = async (req, res, next) => {
  return new AppResponse({
    message: "update info product success",
    statusCode: StatusCodes.OK,
    metadata: await productService.updateProduct(req),
  }).send(res);
};

const deleteProduct = async (req, res, next) => {
  return new AppResponse({
    message: "delete product success",
    statusCode: StatusCodes.OK,
    metadata: await productService.deleteOneProduct(req),
  }).send(res);
};

export const productController = {
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createProduct,
};
