import Express from "express";
import { authController } from "~/controllers/authController";
import { productController } from "~/controllers/productController";
import { uploadProductImages } from "~/utils/Upload";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router
  .route("/")
  .get(catchAsync(productController.getAllProducts))
  .post(
    authController.protect,
    uploadProductImages,
    productController.createProduct
  );

router
  .route("/:id")
  .get(catchAsync(productController.getProduct))
  .patch(
    authController.protect,
    uploadProductImages,
    catchAsync(productController.updateProduct)
  )
  .delete(authController.protect, catchAsync(productController.deleteProduct));

export default router;
