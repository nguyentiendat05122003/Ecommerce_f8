import { StatusCodes } from "http-status-codes";
import { paymentService } from "~/services/paymentService";
import AppResponse from "~/utils/AppResponse";

const createPayment = async (req, res, next) => {
  return new AppResponse({
    message: "create Payment success",
    statusCode: StatusCodes.OK,
    metadata: await paymentService.createPayment(req),
  }).send(res);
};

const getPayment = async (req, res, next) => {
  return new AppResponse({
    message: "get info Payment success",
    statusCode: StatusCodes.OK,
    metadata: await paymentService.getPayment(req),
  }).send(res);
};

const getAllPayments = async (req, res, next) => {
  return new AppResponse({
    message: "get info list Payment success",
    statusCode: StatusCodes.OK,
    metadata: await paymentService.getAllPayment(req),
  }).send(res);
};

const updatePayment = async (req, res, next) => {
  return new AppResponse({
    message: "update info Payment success",
    statusCode: StatusCodes.OK,
    metadata: await paymentService.updatePayment(req),
  }).send(res);
};

const deletePayment = async (req, res, next) => {
  return new AppResponse({
    message: "delete Payment success",
    statusCode: StatusCodes.OK,
    metadata: await paymentService.deleteOnePayment(req),
  }).send(res);
};

export const paymentController = {
  getPayment,
  getAllPayments,
  updatePayment,
  deletePayment,
  createPayment,
};