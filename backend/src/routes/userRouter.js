import Express from "express";
import { authController } from "~/controllers/authController";
import { userValidation } from "~/validations/userValidation";
const router = Express.Router();

router.post("/signup", userValidation.signUp, authController.signUp);

export default router;
