import Express from "express";
import { authController } from "~/controllers/authController";
import { ramController } from "~/controllers/ramController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(ramController.getAllRams))
    .post(catchAsync(ramController.createRam))

router
    .route('/:id')
    .get(catchAsync(ramController.getRam))
    .patch(catchAsync(ramController.updateRam))
    .delete(catchAsync(ramController.deleteRam))

export default router