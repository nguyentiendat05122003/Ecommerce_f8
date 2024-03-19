import userRouter from "./userRouter";
function router(app) {
    app.use("/api/v1/users", userRouter);

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
