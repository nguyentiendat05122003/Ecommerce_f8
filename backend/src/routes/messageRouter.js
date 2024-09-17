import Express from "express";
import { authController } from "~/controllers/authController";
import { messageController } from "~/controllers/messageController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

// router.use(authController.protect);

router.route("/").post(catchAsync(messageController.createMessage));
router.route("/user/:userId").get(catchAsync(messageController.getAllMessages));
router
  .route("/:id")
  .get(catchAsync(messageController.getAllMessages))
  .patch(catchAsync(messageController.updateMessage))
  .delete(catchAsync(messageController.deleteMessage));

export default router;
