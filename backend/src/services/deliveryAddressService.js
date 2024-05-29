import DeliveryAddress from "~/models/deliveryAddress.model";
import { factory } from "./handlerFactory";

const getDeliveryAddress = async (req) => {
  let query = DeliveryAddress.find({ user: req.params.id });
  const doc = await query;
  if (!doc) {
    throw new AppError("No document found with that ID", 404);
  }
  return doc;
};
const createDeliveryAddress = factory.createOne(DeliveryAddress);
const getAllDeliveryAddress = factory.getAll(DeliveryAddress);
const updateDeliveryAddress = factory.updateOne(DeliveryAddress);
const deleteOneDeliveryAddress = factory.deleteOne(DeliveryAddress);

export const deliveryAddressService = {
  getDeliveryAddress,
  getAllDeliveryAddress,
  updateDeliveryAddress,
  deleteOneDeliveryAddress,
  createDeliveryAddress,
};
