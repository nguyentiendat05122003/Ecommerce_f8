import { StatusCodes } from "http-status-codes";
import { reviewService } from "~/services/reviewService";
import AppResponse from "~/utils/AppResponse";

const createReview = async (req, res, next) => {
  return new AppResponse({
    message: "create Review of product success",
    statusCode: StatusCodes.OK,
    metadata: await reviewService.createReview(req),
  }).send(res);
};

const getReview = async (req, res, next) => {
  return new AppResponse({
    message: "get info Review of product success",
    statusCode: StatusCodes.OK,
    metadata: await reviewService.getReview(req),
  }).send(res);
};

const getAllReviews = async (req, res, next) => {
  return new AppResponse({
    message: "get info list Review of product success",
    statusCode: StatusCodes.OK,
    metadata: await reviewService.getAllReview(req),
  }).send(res);
};

const updateReview = async (req, res, next) => {
  return new AppResponse({
    message: "update info Review of product success",
    statusCode: StatusCodes.OK,
    metadata: await reviewService.updateReview(req),
  }).send(res);
};

const deleteReview = async (req, res, next) => {
  return new AppResponse({
    message: "delete Review of product success",
    statusCode: StatusCodes.OK,
    metadata: await reviewService.deleteOneReview(req),
  }).send(res);
};

export const reviewController = {
  getReview,
  getAllReviews,
  updateReview,
  deleteReview,
  createReview,
};
