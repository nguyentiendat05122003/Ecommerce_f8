import Express from "express";
import { cartController } from "~/controllers/cartController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router
  .route("/")
  .get(catchAsync(cartController.getAllCarts))
  .post(catchAsync(cartController.createCart));

router
  .route("/:id")
  .get(catchAsync(cartController.getCart))
  .patch(catchAsync(cartController.updateCart))
  .delete(catchAsync(cartController.deleteProductInCart));

export default router;
