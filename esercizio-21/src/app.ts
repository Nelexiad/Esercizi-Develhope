import express from "express";
import "express-async-errors";

import { initCorsMiddleware } from "./lib/middleware/cors";

import { initMulterMiddleware } from "./lib/middleware/multer";

const upload = initMulterMiddleware();

import {
  validate,
  CryptoData,
  cryptoSchema,
  validationErrorMiddleware,
} from "./lib/validation";



const app = express();

app.use(initCorsMiddleware())

app.use(express.json());



app.use(validationErrorMiddleware);

export default app;
