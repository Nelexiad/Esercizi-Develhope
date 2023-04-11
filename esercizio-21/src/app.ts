import express from "express";
import "express-async-errors";
import { passport } from "./lib/middleware/passport";
import { initCorsMiddleware } from "./lib/middleware/cors";

import { initMulterMiddleware } from "./lib/middleware/multer";

import { initSessionMiddleware } from "./lib/middleware/session";
const upload = initMulterMiddleware();

import {
  validate,
  CryptoData,
  cryptoSchema,
  validationErrorMiddleware,
} from "./lib/validation";

const app = express();

app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());

app.use(initCorsMiddleware());

app.use(express.json());

app.use(validationErrorMiddleware);

export default app;
