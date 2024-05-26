import { StatusCodes } from "http-status-codes";
import { cardService } from "~/services/cardService";
import AppResponse from "~/utils/AppResponse";

const createCard = async (req, res, next) => {
  return new AppResponse({
    message: "create card of product success",
    statusCode: StatusCodes.OK,
    metadata: await cardService.createCard(req),
  }).send(res);
};

const getCard = async (req, res, next) => {
  return new AppResponse({
    message: "get info card of product success",
    statusCode: StatusCodes.OK,
    metadata: await cardService.getCard(req),
  }).send(res);
};

const getAllCards = async (req, res, next) => {
  return new AppResponse({
    message: "get info list card of product success",
    statusCode: StatusCodes.OK,
    metadata: await cardService.getAllCard(req),
  }).send(res);
};

const updateCard = async (req, res, next) => {
  return new AppResponse({
    message: "update info card of product success",
    statusCode: StatusCodes.OK,
    metadata: await cardService.updateCard(req),
  }).send(res);
};

const deleteCard = async (req, res, next) => {
  return new AppResponse({
    message: "delete card of product success",
    statusCode: StatusCodes.OK,
    metadata: await cardService.deleteOneCard(req),
  }).send(res);
};

export const cardController = {
  getCard,
  getAllCards,
  updateCard,
  deleteCard,
  createCard,
};
