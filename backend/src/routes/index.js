import AppError from "~/utils/AppError";
import userRouter from "./userRouter";
import productRouter from "./productRouter";
import typeProductRouter from "./typeProductRouter";
import brandProductRouter from "./brandProductRouter";
import cpuProductRouter from "./cpuRouter";
import diskRouter from "./diskRouter";
import ramRouter from './ramRouter'

function router(app) {
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/products", productRouter);
    app.use("/api/v1/typeProducts", typeProductRouter);
    app.use("/api/v1/brandProducts", brandProductRouter);
    app.use("/api/v1/cpu", cpuProductRouter);
    app.use("/api/v1/disk", diskRouter);
    app.use("/api/v1/ram", ramRouter);
    //handle not found router
    app.all("*", (req, res, next) => {
        const error = new AppError(
            `Can't find ${req.originalUrl} on this server`,
            400
        );
        next(error);
    });
}

export default router
