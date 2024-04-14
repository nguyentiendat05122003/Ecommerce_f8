import { StatusCodes } from "http-status-codes";
import { brandProductService } from "~/services/brandProductService";
import AppResponse from "~/utils/AppResponse";

const createBrandProduct = async (req, res, next) => {
  return new AppResponse({
    message: "create brand of product success",
    statusCode: StatusCodes.OK,
    metadata: await brandProductService.createBrandProduct(req),
  }).send(res);
};

const getBrandProduct = async (req, res, next) => {
  return new AppResponse({
    message: "get info brand of product success",
    statusCode: StatusCodes.OK,
    metadata: await brandProductService.getBrandProduct(req),
  }).send(res);
};

const getAllBrandProducts = async (req, res, next) => {
  return new AppResponse({
    message: "get info list brand of product success",
    statusCode: StatusCodes.OK,
    metadata: await brandProductService.getAllBrandProduct(req),
  }).send(res);
};

const updateBrandProduct = async (req, res, next) => {
  return new AppResponse({
    message: "update info brand of product success",
    statusCode: StatusCodes.OK,
    metadata: await brandProductService.updateBrandProduct(req),
  }).send(res);
};

const deleteBrandProduct = async (req, res, next) => {
  return new AppResponse({
    message: "delete brand of product success",
    statusCode: StatusCodes.OK,
    metadata: await brandProductService.deleteOneBrandProduct(req),
  }).send(res);
};

export const brandProductController = {
  getBrandProduct,
  getAllBrandProducts,
  updateBrandProduct,
  deleteBrandProduct,
  createBrandProduct,
};
