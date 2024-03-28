import Express from "express";
import { authController } from "~/controllers/authController";
import { brandProductController } from "~/controllers/brandProductController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(brandProductController.getAllBrandProducts))
    .post(catchAsync(brandProductController.createBrandProduct))

router
    .route('/:id')
    .get(catchAsync(brandProductController.getBrandProduct))
    .patch(catchAsync(brandProductController.updateBrandProduct))
    .delete(catchAsync(brandProductController.deleteBrandProduct))

export default router