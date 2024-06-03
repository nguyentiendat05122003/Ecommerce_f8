import { StatusCodes } from "http-status-codes";
import { notificationService } from "~/services/notificationService";
import AppResponse from "~/utils/AppResponse";

const createNotification = async (req, res, next) => {
  return new AppResponse({
    message: "create Notification of success",
    statusCode: StatusCodes.OK,
    metadata: await notificationService.createNotification(req),
  }).send(res);
};

const getNotification = async (req, res, next) => {
  return new AppResponse({
    message: "get info Notification of success",
    statusCode: StatusCodes.OK,
    metadata: await notificationService.getNotification(req),
  }).send(res);
};

const getAllNotifications = async (req, res, next) => {
  return new AppResponse({
    message: "get info list Notification of success",
    statusCode: StatusCodes.OK,
    metadata: await notificationService.getAllNotification(req),
  }).send(res);
};

const updateNotification = async (req, res, next) => {
  return new AppResponse({
    message: "update info Notification of success",
    statusCode: StatusCodes.OK,
    metadata: await notificationService.updateNotification(req),
  }).send(res);
};

const deleteNotification = async (req, res, next) => {
  return new AppResponse({
    message: "delete Notification of success",
    statusCode: StatusCodes.OK,
    metadata: await notificationService.deleteOneNotification(req),
  }).send(res);
};

export const notificationController = {
  getNotification,
  getAllNotifications,
  updateNotification,
  deleteNotification,
  createNotification,
};
