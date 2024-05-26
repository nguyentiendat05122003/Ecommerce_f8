import Express from "express";
import { authController } from "~/controllers/authController";
import { typeRamController } from "~/controllers/typeRamController";
import { uploadTypeProductThumb } from "~/utils/Upload";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(typeRamController.getAllTypeRams))
  .post(uploadTypeProductThumb, catchAsync(typeRamController.createTypeRam));

router
  .route("/:id")
  .get(catchAsync(typeRamController.getTypeRam))
  .patch(catchAsync(typeRamController.updateTypeRam))
  .delete(catchAsync(typeRamController.deleteTypeRam));

export default router;
