import { StatusCodes } from "http-status-codes";
import { typeBrandService } from "~/services/typeBrandService";
import AppResponse from "~/utils/AppResponse";

const createTypeBrand = async (req, res, next) => {
  return new AppResponse({
    message: "create TypeBrand of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeBrandService.createTypeBrand(req),
  }).send(res);
};

const getTypeBrand = async (req, res, next) => {
  return new AppResponse({
    message: "get info TypeBrand of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeBrandService.getTypeBrand(req),
  }).send(res);
};

const getAllTypeBrands = async (req, res, next) => {
  return new AppResponse({
    message: "get info list TypeBrand of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeBrandService.getAllTypeBrand(req),
  }).send(res);
};

const updateTypeBrand = async (req, res, next) => {
  return new AppResponse({
    message: "update info TypeBrand of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeBrandService.updateTypeBrand(req),
  }).send(res);
};

const deleteTypeBrand = async (req, res, next) => {
  return new AppResponse({
    message: "delete TypeBrand of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeBrandService.deleteOneTypeBrand(req),
  }).send(res);
};

export const typeBrandController = {
  getTypeBrand,
  getAllTypeBrands,
  updateTypeBrand,
  deleteTypeBrand,
  createTypeBrand,
};
