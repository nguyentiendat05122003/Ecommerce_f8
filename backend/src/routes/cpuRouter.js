import Express from "express";
import { authController } from "~/controllers/authController";
import { cpuController } from "~/controllers/cpuController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
    .route('/')
    .get(catchAsync(cpuController.getAllCPUs))
    .post(catchAsync(cpuController.createCPU))

router
    .route('/:id')
    .get(catchAsync(cpuController.getCPU))
    .patch(catchAsync(cpuController.updateCPU))
    .delete(catchAsync(cpuController.deleteCPU))

export default router