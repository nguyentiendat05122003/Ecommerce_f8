import Message from "~/models/message.model";
import { factory } from "./handlerFactory";
import mongoose from "mongoose";

const getMessage = factory.getOne(Message);
const createMessage = factory.createOne(Message);
const getAllMessage = async (req) => {
  const userId = req.params.userId;
  const aggregatedMessages = await Message.aggregate([
    {
      $match: {
        $or: [
          { sender: new mongoose.Types.ObjectId(userId) },
          { receiver: new mongoose.Types.ObjectId(userId) },
        ],
      },
    },
    {
      $addFields: {
        date: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
      },
    },
    {
      $group: {
        _id: "$date",
        messages: {
          $push: {
            _id: "$_id",
            sender: "$sender",
            receiver: "$receiver",
            content: "$content",
            createdAt: "$createdAt",
            updatedAt: "$updatedAt",
          },
        },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  return { data: aggregatedMessages };
};
const updateMessage = factory.updateOne(Message);
const deleteOneMessage = factory.deleteOne(Message);

export const messageService = {
  getMessage,
  getAllMessage,
  updateMessage,
  deleteOneMessage,
  createMessage,
};
