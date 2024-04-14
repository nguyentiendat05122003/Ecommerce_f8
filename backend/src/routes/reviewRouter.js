import Express from "express";
import { reviewController } from "~/controllers/reviewController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router
  .route("/")
  .get(catchAsync(reviewController.getAllReviews))
  .post(catchAsync(reviewController.createReview));

router
  .route("/:id")
  .get(catchAsync(reviewController.getReview))
  .patch(catchAsync(reviewController.updateReview))
  .delete(catchAsync(reviewController.deleteReview));

export default router;
