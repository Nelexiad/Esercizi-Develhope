import express from "express";
import "express-async-errors";

import { passport } from "./lib/middleware/passport";
import { initCorsMiddleware } from "./lib/middleware/cors";
import { initMulterMiddleware } from "./lib/middleware/multer";
import { initSessionMiddleware } from "./lib/middleware/session";
import { validationErrorMiddleware } from "./lib/middleware/validation";

import cryptosRoutes from "./routes/cryptos";
import authRoutes from "./routes/auth";

const upload = initMulterMiddleware();

const app = express();

app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());

app.use(initCorsMiddleware());

app.use(express.json());

app.use("/cryptos", cryptosRoutes);
app.use("/auth", authRoutes);

app.use(validationErrorMiddleware);

export default app;
