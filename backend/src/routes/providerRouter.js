import Express from "express";
import { authController } from "~/controllers/authController";
import { providerController } from "~/controllers/providerController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(providerController.getAllProviders))
  .post(catchAsync(providerController.createProvider));

router
  .route("/:id")
  .get(catchAsync(providerController.getProvider))
  .patch(catchAsync(providerController.updateProvider))
  .delete(catchAsync(providerController.deleteProvider));

export default router;
