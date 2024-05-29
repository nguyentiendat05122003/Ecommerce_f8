import { StatusCodes } from "http-status-codes";
import { deliveryAddressService } from "~/services/deliveryAddressService";
import AppResponse from "~/utils/AppResponse";

const createDeliveryAddress = async (req, res, next) => {
  return new AppResponse({
    message: "create DeliveryAddress of user success",
    statusCode: StatusCodes.OK,
    metadata: await deliveryAddressService.createDeliveryAddress(req),
  }).send(res);
};

const getDeliveryAddress = async (req, res, next) => {
  return new AppResponse({
    message: "get info DeliveryAddress of user success",
    statusCode: StatusCodes.OK,
    metadata: await deliveryAddressService.getDeliveryAddress(req),
  }).send(res);
};

const getAllDeliveryAddress = async (req, res, next) => {
  return new AppResponse({
    message: "get info list DeliveryAddress of user success",
    statusCode: StatusCodes.OK,
    metadata: await deliveryAddressService.getAllDeliveryAddress(req),
  }).send(res);
};

const updateDeliveryAddress = async (req, res, next) => {
  return new AppResponse({
    message: "update info DeliveryAddress of user success",
    statusCode: StatusCodes.OK,
    metadata: await deliveryAddressService.updateDeliveryAddress(req),
  }).send(res);
};

const deleteDeliveryAddress = async (req, res, next) => {
  return new AppResponse({
    message: "delete DeliveryAddress of user success",
    statusCode: StatusCodes.OK,
    metadata: await deliveryAddressService.deleteOneDeliveryAddress(req),
  }).send(res);
};

export const deliveryAddressController = {
  getDeliveryAddress,
  getAllDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliveryAddress,
  createDeliveryAddress,
};
