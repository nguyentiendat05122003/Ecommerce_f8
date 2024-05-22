import Express from "express";
import { authController } from "~/controllers/authController";
import { typeBrandController } from "~/controllers/typeBrandController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

// router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(typeBrandController.getAllTypeBrands))
  .post(catchAsync(typeBrandController.createTypeBrand));

router
  .route("/:id")
  .get(catchAsync(typeBrandController.getTypeBrand))
  .patch(catchAsync(typeBrandController.updateTypeBrand))
  .delete(catchAsync(typeBrandController.deleteTypeBrand));

export default router;
