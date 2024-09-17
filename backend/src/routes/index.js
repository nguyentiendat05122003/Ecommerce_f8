import AppError from "~/utils/AppError";
import userRouter from "./userRouter";
import productRouter from "./productRouter";
import typeProductRouter from "./typeProductRouter";
import brandProductRouter from "./brandProductRouter";
import cpuProductRouter from "./cpuRouter";
import diskRouter from "./diskRouter";
import ramRouter from "./ramRouter";
import screenRefreshRateRouter from "./screenRefreshRateRouter";
import screenResolutionRouter from "./screenResolutionRouter";
import screenSizeRouter from "./screenSizeRouter";
import specialFeaturesRouter from "./specialFeaturesRouter";
import otherInfoRouter from "./otherInfoRouter";
import typeBrandRouter from "./typeBrandRouter";
import commentRouter from "./commentRouter";
import reviewRouter from "./reviewRouter";
import cartRouter from "./cartRouter";
import paymentRouter from "./paymentRouter";
import providerRouter from "./providerRouter";
import supplierInvoiceRouter from "./supplierInvoiceRouter";
import screenRouter from "./screenRouter";
import typeRamRouter from "./typeRamRouter";
import cardRouter from "./cardRouter";
import notificationRouter from "./notificationRouter";
import deliveryAddressRouter from "./deliveryAddressRouter";
import messageRouter from "./messageRouter";
import statisticalRouter from "./statisticalRouter";

function router(app) {
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/message", messageRouter);
  app.use("/api/v1/statistical", statisticalRouter);
  app.use("/api/v1/notification", notificationRouter);
  app.use("/api/v1/deliveryAddress", deliveryAddressRouter);
  app.use("/api/v1/screens", screenRouter);
  app.use("/api/v1/typeRam", typeRamRouter);
  app.use("/api/v1/card", cardRouter);
  app.use("/api/v1/products", productRouter);
  app.use("/api/v1/typeProducts", typeProductRouter);
  app.use("/api/v1/brandProducts", brandProductRouter);
  app.use("/api/v1/cpu", cpuProductRouter);
  app.use("/api/v1/disk", diskRouter);
  app.use("/api/v1/ram", ramRouter);
  app.use("/api/v1/screenResolution", screenResolutionRouter);
  app.use("/api/v1/screenRefreshRate", screenRefreshRateRouter);
  app.use("/api/v1/screenSize", screenSizeRouter);
  app.use("/api/v1/specialFeatures", specialFeaturesRouter);
  app.use("/api/v1/otherInfo", otherInfoRouter);
  app.use("/api/v1/typeBrand", typeBrandRouter);
  app.use("/api/v1/comment", commentRouter);
  app.use("/api/v1/review", reviewRouter);
  app.use("/api/v1/cart", cartRouter);
  app.use("/api/v1/payment", paymentRouter);
  app.use("/api/v1/provider", providerRouter);
  app.use("/api/v1/supplierInvoice", supplierInvoiceRouter);
  //handle not found router
  app.all("*", (req, res, next) => {
    const error = new AppError(
      `Can't find ${req.originalUrl} on this server`,
      400
    );
    next(error);
  });
}

export default router;
