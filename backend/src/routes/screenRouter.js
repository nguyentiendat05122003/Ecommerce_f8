import Express from "express";
import { authController } from "~/controllers/authController";
import { screenController } from "~/controllers/screenController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(screenController.getAllScreens))
  .post(catchAsync(screenController.createScreen));

router
  .route("/:id")
  .get(catchAsync(screenController.getScreen))
  .patch(catchAsync(screenController.updateScreen))
  .delete(catchAsync(screenController.deleteScreen));

export default router;
