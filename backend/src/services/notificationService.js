import Notification from "~/models/notification.model";
import { factory } from "./handlerFactory";

const getNotification = factory.getOne(Notification);
const createNotification = factory.createOne(Notification);
const getAllNotification = factory.getAll(Notification);
const updateNotification = factory.updateOne(Notification);
const deleteOneNotification = factory.deleteOne(Notification);

export const notificationService = {
  getNotification,
  getAllNotification,
  updateNotification,
  deleteOneNotification,
  createNotification,
};
