import { StatusCodes } from "http-status-codes";
import { providerService } from "~/services/providerService";
import AppResponse from "~/utils/AppResponse";

const createProvider = async (req, res, next) => {
  return new AppResponse({
    message: "create Provider of product success",
    statusCode: StatusCodes.OK,
    metadata: await providerService.createProvider(req),
  }).send(res);
};

const getProvider = async (req, res, next) => {
  return new AppResponse({
    message: "get info Provider of product success",
    statusCode: StatusCodes.OK,
    metadata: await providerService.getProvider(req),
  }).send(res);
};

const getAllProviders = async (req, res, next) => {
  return new AppResponse({
    message: "get info list Provider of product success",
    statusCode: StatusCodes.OK,
    metadata: await providerService.getAllProvider(req),
  }).send(res);
};

const updateProvider = async (req, res, next) => {
  return new AppResponse({
    message: "update info Provider of product success",
    statusCode: StatusCodes.OK,
    metadata: await providerService.updateProvider(req),
  }).send(res);
};

const deleteProvider = async (req, res, next) => {
  return new AppResponse({
    message: "delete Provider of product success",
    statusCode: StatusCodes.OK,
    metadata: await providerService.deleteOneProvider(req),
  }).send(res);
};

export const providerController = {
  getProvider,
  getAllProviders,
  updateProvider,
  deleteProvider,
  createProvider,
};
