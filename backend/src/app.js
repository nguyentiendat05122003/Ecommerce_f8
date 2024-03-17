import express from "express";
import bodyParser from "body-parser";
import a from "./controllers";
import morgan from "morgan";
import { env } from "./configs/environment";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  console.log(a);
  res.status(200).json({
    status: a,
  });
});

export default app;
