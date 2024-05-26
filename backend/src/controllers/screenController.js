import { StatusCodes } from "http-status-codes";
import { screenService } from "~/services/screenService";
import AppResponse from "~/utils/AppResponse";

const createScreen = async (req, res, next) => {
  return new AppResponse({
    message: "create Screen of product success",
    statusCode: StatusCodes.OK,
    metadata: await screenService.createScreen(req),
  }).send(res);
};

const getScreen = async (req, res, next) => {
  return new AppResponse({
    message: "get info Screen of product success",
    statusCode: StatusCodes.OK,
    metadata: await screenService.getScreen(req),
  }).send(res);
};

const getAllScreens = async (req, res, next) => {
  return new AppResponse({
    message: "get info list Screen of product success",
    statusCode: StatusCodes.OK,
    metadata: await screenService.getAllScreen(req),
  }).send(res);
};

const updateScreen = async (req, res, next) => {
  return new AppResponse({
    message: "update info Screen of product success",
    statusCode: StatusCodes.OK,
    metadata: await screenService.updateScreen(req),
  }).send(res);
};

const deleteScreen = async (req, res, next) => {
  return new AppResponse({
    message: "delete Screen of product success",
    statusCode: StatusCodes.OK,
    metadata: await screenService.deleteOneScreen(req),
  }).send(res);
};

export const screenController = {
  getScreen,
  getAllScreens,
  updateScreen,
  deleteScreen,
  createScreen,
};
