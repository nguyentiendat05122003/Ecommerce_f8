import Express from "express";
import { authController } from "~/controllers/authController";
import { specialFeaturesController } from "~/controllers/specialFeaturesController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(specialFeaturesController.getAllSpecialFeatures))
    .post(catchAsync(specialFeaturesController.createSpecialFeatures))

router
    .route('/:id')
    .get(catchAsync(specialFeaturesController.getSpecialFeatures))
    .patch(catchAsync(specialFeaturesController.updateSpecialFeatures))
    .delete(catchAsync(specialFeaturesController.deleteSpecialFeatures))

export default router