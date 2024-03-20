import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { env } from "./configs/environment";
import dbConnect from "./configs/db";
import router from "./routes";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import cookieParser from 'cookie-parser'
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//init db
dbConnect;

//init router
router(app)

if (env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(errorHandlerMiddleware);

export default app;
