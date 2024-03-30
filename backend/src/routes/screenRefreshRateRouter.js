import Express from "express";
import { authController } from "~/controllers/authController";
import { screenRefreshRateController } from "~/controllers/screenRefreshRateController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(screenRefreshRateController.getAllScreenRefreshRates))
    .post(catchAsync(screenRefreshRateController.createScreenRefreshRate))

router
    .route('/:id')
    .get(catchAsync(screenRefreshRateController.getScreenRefreshRate))
    .patch(catchAsync(screenRefreshRateController.updateScreenRefreshRate))
    .delete(catchAsync(screenRefreshRateController.deleteScreenRefreshRate))

export default router