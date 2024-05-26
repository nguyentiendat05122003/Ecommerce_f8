import { StatusCodes } from "http-status-codes";
import { typeRam } from "~/services/typeRamService";
import AppResponse from "~/utils/AppResponse";

const createTypeRam = async (req, res, next) => {
  return new AppResponse({
    message: "create TypeRam of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeRam.createTypeRam(req),
  }).send(res);
};

const getTypeRam = async (req, res, next) => {
  return new AppResponse({
    message: "get info TypeRam of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeRam.getTypeRam(req),
  }).send(res);
};

const getAllTypeRams = async (req, res, next) => {
  return new AppResponse({
    message: "get info list TypeRam of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeRam.getAllTypeRam(req),
  }).send(res);
};

const updateTypeRam = async (req, res, next) => {
  return new AppResponse({
    message: "update info TypeRam of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeRam.updateTypeRam(req),
  }).send(res);
};

const deleteTypeRam = async (req, res, next) => {
  return new AppResponse({
    message: "delete TypeRam of product success",
    statusCode: StatusCodes.OK,
    metadata: await typeRam.deleteOneTypeRam(req),
  }).send(res);
};

export const typeRamController = {
  getTypeRam,
  getAllTypeRams,
  updateTypeRam,
  deleteTypeRam,
  createTypeRam,
};
