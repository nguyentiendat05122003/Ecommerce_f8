import Express from "express";
import { authController } from "~/controllers/authController";
import { typeProductController } from "~/controllers/typeProductController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(typeProductController.getAllTypeProducts))
    .post(catchAsync(typeProductController.createTypeProduct))

router
    .route('/:id')
    .get(catchAsync(typeProductController.getTypeProduct))
    .patch(catchAsync(typeProductController.updateTypeProduct))
    .delete(catchAsync(typeProductController.deleteTypeProduct))

export default router