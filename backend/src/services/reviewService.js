import Review from "~/models/review.model";
import { factory } from "./handlerFactory";

const getReview = factory.getOne(Review);
const createReview = factory.createOne(Review);
const getAllReview = factory.getAll(Review);
const updateReview = factory.updateOne(Review);
const deleteOneReview = factory.deleteOne(Review);

export const reviewService = {
  getReview,
  getAllReview,
  updateReview,
  deleteOneReview,
  createReview,
};
