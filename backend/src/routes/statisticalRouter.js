import Express from "express";
import { authController } from "~/controllers/authController";
import { statisticalController } from "~/controllers/statisticalController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

// router.use(authController.protect);

router
  .route("/totalAmount")
  .get(catchAsync(statisticalController.getTotalAmount));
router
  .route("/monthlyRevenue/:year")
  .get(catchAsync(statisticalController.getMonthlyRevenue));

export default router;
