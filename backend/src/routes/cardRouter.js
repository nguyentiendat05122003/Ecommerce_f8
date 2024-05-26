import Express from "express";
import { authController } from "~/controllers/authController";
import { cardController } from "~/controllers/cardController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(cardController.getAllCards))
  .post(catchAsync(cardController.createCard));

router
  .route("/:id")
  .get(catchAsync(cardController.getCard))
  .patch(catchAsync(cardController.updateCard))
  .delete(catchAsync(cardController.deleteCard));

export default router;
