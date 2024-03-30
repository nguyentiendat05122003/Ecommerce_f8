import Express from "express";
import { authController } from "~/controllers/authController";
import { otherInfoController } from "~/controllers/otherInfoController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(otherInfoController.getAllOtherInfos))
    .post(catchAsync(otherInfoController.createOtherInfo))

router
    .route('/:id')
    .get(catchAsync(otherInfoController.getOtherInfo))
    .patch(catchAsync(otherInfoController.updateOtherInfo))
    .delete(catchAsync(otherInfoController.deleteOtherInfo))

export default router