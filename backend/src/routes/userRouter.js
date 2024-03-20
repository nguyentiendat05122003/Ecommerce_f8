import Express from "express";
import { authController } from "~/controllers/authController";
import catchAsync from "~/utils/catchAsync";
import { userValidation } from "~/validations/userValidation";
const router = Express.Router();

router.post("/signup", userValidation.signUp, authController.signUp);
router.post("/login", catchAsync(authController.login));

router.post("/refreshToken", catchAsync(authController.refreshToken));
router.post("/logout", catchAsync(authController.logOut));

export default router;
