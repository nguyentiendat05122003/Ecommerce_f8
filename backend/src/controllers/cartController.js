import { StatusCodes } from "http-status-codes";
import { cartService } from "~/services/cartService";
import AppResponse from "~/utils/AppResponse";

const createCart = async (req, res, next) => {
  return new AppResponse({
    message: "create cart of user success",
    statusCode: StatusCodes.OK,
    metadata: await cartService.createCart(req),
  }).send(res);
};

const getCart = async (req, res, next) => {
  return new AppResponse({
    message: "get info cart of user success",
    statusCode: StatusCodes.OK,
    metadata: await cartService.getCart(req),
  }).send(res);
};

const getAllCarts = async (req, res, next) => {
  return new AppResponse({
    message: "get info list cart of user success",
    statusCode: StatusCodes.OK,
    metadata: await cartService.getAllCart(req),
  }).send(res);
};

const updateCart = async (req, res, next) => {
  return new AppResponse({
    message: "update info cart of user success",
    statusCode: StatusCodes.OK,
    metadata: await cartService.updateCart(req),
  }).send(res);
};

const deleteProductInCart = async (req, res, next) => {
  return new AppResponse({
    message: "delete cart of user success",
    statusCode: StatusCodes.OK,
    metadata: await cartService.deleteProductInCart(req),
  }).send(res);
};

export const cartController = {
  getCart,
  getAllCarts,
  updateCart,
  deleteProductInCart,
  createCart,
};
