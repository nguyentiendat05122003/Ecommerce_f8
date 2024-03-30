import Express from "express";
import { authController } from "~/controllers/authController";
import { screenResolutionController } from "~/controllers/screenResolutionController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(screenResolutionController.getAllScreenResolutions))
    .post(catchAsync(screenResolutionController.createScreenResolution))

router
    .route('/:id')
    .get(catchAsync(screenResolutionController.getScreenResolution))
    .patch(catchAsync(screenResolutionController.updateScreenResolution))
    .delete(catchAsync(screenResolutionController.deleteScreenResolution))

export default router