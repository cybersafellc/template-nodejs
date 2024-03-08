import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { errorHandling } from "../middlewares/error-middleware.js";
import { pageNotFound } from "../middlewares/notFound-middleware.js";

export const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(pageNotFound);
app.use(errorHandling);
