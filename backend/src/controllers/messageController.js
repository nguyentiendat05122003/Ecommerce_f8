import { StatusCodes } from "http-status-codes";
import { messageService } from "~/services/messageService";
import AppResponse from "~/utils/AppResponse";

const createMessage = async (req, res, next) => {
  return new AppResponse({
    message: "create Message of success",
    statusCode: StatusCodes.OK,
    metadata: await messageService.createMessage(req),
  }).send(res);
};

const getMessage = async (req, res, next) => {
  return new AppResponse({
    message: "get info Message of success",
    statusCode: StatusCodes.OK,
    metadata: await messageService.getMessage(req),
  }).send(res);
};

const getAllMessages = async (req, res, next) => {
  return new AppResponse({
    message: "get info list Message of success",
    statusCode: StatusCodes.OK,
    metadata: await messageService.getAllMessage(req),
  }).send(res);
};

const updateMessage = async (req, res, next) => {
  return new AppResponse({
    message: "update info Message of success",
    statusCode: StatusCodes.OK,
    metadata: await messageService.updateMessage(req),
  }).send(res);
};

const deleteMessage = async (req, res, next) => {
  return new AppResponse({
    message: "delete Message of success",
    statusCode: StatusCodes.OK,
    metadata: await messageService.deleteOneMessage(req),
  }).send(res);
};

export const messageController = {
  getMessage,
  getAllMessages,
  updateMessage,
  deleteMessage,
  createMessage,
};
