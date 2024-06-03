import Express from "express";
import { authController } from "~/controllers/authController";
import { notificationController } from "~/controllers/notificationController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

// router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(notificationController.getAllNotifications))
  .post(catchAsync(notificationController.createNotification));

router
  .route("/:id")
  .get(catchAsync(notificationController.getNotification))
  .patch(catchAsync(notificationController.updateNotification))
  .delete(catchAsync(notificationController.deleteNotification));

export default router;
