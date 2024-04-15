import Express from "express";
import { authController } from "~/controllers/authController";
import { supplierInvoiceController } from "~/controllers/supplierInvoiceController";
import catchAsync from "~/utils/catchAsync";

const router = Express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(catchAsync(supplierInvoiceController.getAllSupplierInvoices))
  .post(catchAsync(supplierInvoiceController.createSupplierInvoice));

router
  .route("/:id")
  .get(catchAsync(supplierInvoiceController.getSupplierInvoice))
  .patch(catchAsync(supplierInvoiceController.updateSupplierInvoice))
  .delete(catchAsync(supplierInvoiceController.deleteSupplierInvoice));

export default router;
