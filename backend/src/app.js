import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { env } from "./configs/environment";
import dbConnect from "./configs/db";
import router from "./routes";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
if (env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

//init db
export const client = dbConnect.connect();

//init router
router(app);

app.use(errorHandlerMiddleware);

export default app;
