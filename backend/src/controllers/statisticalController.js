import { StatusCodes } from "http-status-codes";
import { statisticalService } from "~/services/statisticalService";
import AppResponse from "~/utils/AppResponse";

const getTotalAmount = async (req, res, next) => {
  return new AppResponse({
    message: "get statistical of shop success",
    statusCode: StatusCodes.OK,
    metadata: await statisticalService.getTotalAmount(req),
  }).send(res);
};

const getMonthlyRevenue = async (req, res, next) => {
  return new AppResponse({
    message: "get MonthlyRevenue of shop success",
    statusCode: StatusCodes.OK,
    metadata: await statisticalService.getMonthlyRevenue(req),
  }).send(res);
};

export const statisticalController = {
  getTotalAmount,
  getMonthlyRevenue,
};
