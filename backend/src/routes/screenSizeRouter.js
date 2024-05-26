import Express from "express";
import { authController } from "~/controllers/authController";
import { screenSizeController } from "~/controllers/screenSizeController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(screenSizeController.getAllScreenSizes))
  .post(catchAsync(screenSizeController.createScreenSize));

router
  .route("/:id")
  .get(catchAsync(screenSizeController.getScreenSize))
  .patch(catchAsync(screenSizeController.updateScreenSize))
  .delete(catchAsync(screenSizeController.deleteScreenSize));

export default router;
