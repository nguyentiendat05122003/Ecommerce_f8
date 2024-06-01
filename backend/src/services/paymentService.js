import Payment from "~/models/payment.model";
import { factory } from "./handlerFactory";

const getPayment = factory.getOne(Payment);
const createPayment = factory.createOne(Payment);
const getAllPayment = factory.getAll(Payment);
const updatePayment = factory.updateOne(Payment);
const deleteOnePayment = factory.deleteOne(Payment);
const checkUserPurchase = async (req) => {
  const { userId, productId } = req.params;
  const payment = await Payment.findOne({
    user: userId,
    "detail_payment.productId": productId,
  });
  return !!payment;
};
export const paymentService = {
  getPayment,
  getAllPayment,
  updatePayment,
  deleteOnePayment,
  createPayment,
  checkUserPurchase,
};
