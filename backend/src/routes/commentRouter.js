import Express from "express";
import { commentController } from "~/controllers/commentController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router
  .route("/")
  .get(catchAsync(commentController.getAllComments))
  .post(catchAsync(commentController.createComment));

router
  .route("/:id")
  .get(catchAsync(commentController.getComment))
  .patch(catchAsync(commentController.updateComment))
  .delete(catchAsync(commentController.deleteComment));

export default router;
