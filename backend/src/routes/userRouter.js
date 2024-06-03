import Express from "express";
import { authController } from "~/controllers/authController";
import { userController } from "~/controllers/userController";
import { uploadUserPhoto } from "~/utils/Upload";
import catchAsync from "~/utils/catchAsync";
import { userValidation } from "~/validations/userValidation";
const router = Express.Router();

router.post("/signup", authController.signUp);
router.post("/login", userValidation.login, catchAsync(authController.login));
router.post("/forgotPassword", catchAsync(authController.forgotPassword));
router.post("/resetPassword/:token", catchAsync(authController.resetPassword));

router.use(authController.protect);
router.post("/logout", catchAsync(authController.logOut));

router.post("/refreshToken", catchAsync(authController.refreshToken));
router.patch(
  "/updateMyPassword",
  userValidation.updatePassword,
  catchAsync(authController.updatePassword)
);

router.get(
  "/me",
  catchAsync(userController.getMe),
  catchAsync(userController.getUser)
);
router.patch("/updateMe", uploadUserPhoto, catchAsync(userController.updateMe));

router.use(authController.restrictTo("admin"));

router.route("/").get(catchAsync(userController.getAllUsers));
router
  .route("/:id")
  .get(catchAsync(userController.getUser))
  .patch(catchAsync(userController.updateUser))
  .delete(catchAsync(userController.deleteUser));

export default router;
