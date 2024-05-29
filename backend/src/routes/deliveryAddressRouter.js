import Express from "express";
import { authController } from "~/controllers/authController";
import { deliveryAddressController } from "~/controllers/deliveryAddressController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

// router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(deliveryAddressController.getAllDeliveryAddress))
  .post(catchAsync(deliveryAddressController.createDeliveryAddress));

router
  .route("/:id")
  .get(catchAsync(deliveryAddressController.getDeliveryAddress))
  .patch(catchAsync(deliveryAddressController.updateDeliveryAddress))
  .delete(catchAsync(deliveryAddressController.deleteDeliveryAddress));

export default router;
