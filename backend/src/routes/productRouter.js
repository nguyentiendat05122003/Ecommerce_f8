import Express from "express";
import { authController } from "~/controllers/authController";
import { productController } from "~/controllers/productController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(productController.getAllProducts))
    .post(catchAsync(productController.createProduct))

router
    .route('/:id')
    .get(catchAsync(productController.getProduct))
    .patch(catchAsync(productController.updateProduct))
    .delete(catchAsync(productController.deleteProduct))

export default router