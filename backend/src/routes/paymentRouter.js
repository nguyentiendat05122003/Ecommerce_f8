import Express from "express";
import { authController } from "~/controllers/authController";
import { paymentController } from "~/controllers/paymentController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

// router.use(authController.protect);

router
  .route("/checkUserPurchase/:userId/:productId")
  .get(catchAsync(paymentController.checkUserPurchase));

router
  .route("/")
  .get(catchAsync(paymentController.getAllPayments))
  .post(catchAsync(paymentController.createPayment));

router
  .route("/:id")
  .get(catchAsync(paymentController.getPayment))
  .patch(catchAsync(paymentController.updatePayment))
  .delete(catchAsync(paymentController.deletePayment));

export default router;
