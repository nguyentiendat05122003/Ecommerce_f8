import Notification from "~/models/notification.model";
import { factory } from "./handlerFactory";

const getNotification = factory.getOne(Notification);
const createNotification = async (req, res) => {
  const { sender, payment, content } = req.body;
  let newNotification = await Notification.create({
    sender,
    payment,
    content,
  });
  newNotification = await Notification.findById(newNotification._id).populate({
    path: "sender",
    select: "email name photo",
  });
  return newNotification;
};
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
