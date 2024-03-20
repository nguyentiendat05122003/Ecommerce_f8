import Express from "express";
import { authController } from "~/controllers/authController";
import { userController } from "~/controllers/userController";
import catchAsync from "~/utils/catchAsync";
import { userValidation } from "~/validations/userValidation";
const router = Express.Router();

router.post("/signup", userValidation.signUp, authController.signUp);
router.post("/login", catchAsync(authController.login));
router.post("/logout", catchAsync(authController.logOut));

router.use(authController.protect);

router.post("/refreshToken", catchAsync(authController.refreshToken));
router.patch('/updateMyPassword', catchAsync(authController.updatePassword));

router.use(authController.restrictTo('admin'));
router
    .route('/')
    .get(catchAsync(userController.getAllUsers))
router
    .route('/:id')
    .get(catchAsync(userController.getUser))
    .patch(catchAsync(userController.updateUser))
    .delete(catchAsync(userController.deleteUser));
export default router;
