import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { env } from "./configs/environment";
import dbConnect from "./configs/db";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//init db
dbConnect;

if (env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(errorHandlerMiddleware);

export default app;
