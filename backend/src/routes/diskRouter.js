import Express from "express";
import { authController } from "~/controllers/authController";
import { diskController } from "~/controllers/diskController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(diskController.getAllDisks))
    .post(catchAsync(diskController.createDisk))

router
    .route('/:id')
    .get(catchAsync(diskController.getDisk))
    .patch(catchAsync(diskController.updateDisk))
    .delete(catchAsync(diskController.deleteDisk))

export default router