import express from "express";
import "express-async-errors";
import cors from "cors";

import prisma from "./lib/prisma/client";
import { initMulterMiddleware } from "./lib/middleware/multer";

const upload = initMulterMiddleware();

import {
  validate,
  CryptoData,
  cryptoSchema,
  validationErrorMiddleware,
} from "./lib/validation";

const corsOptions = {
  origin: "http://localhost:8080",
};

const app = express();

app.use(express.json());
app.use(cors());

app.get("/cryptos", async (req, res) => {
  const cryptos = await prisma.crypto.findMany();

  res.json(cryptos);
});

app.get("/cryptos/:id(\\d+)", async (req, res, next) => {
  const cryptoId = Number(req.params.id);

  const crypto = await prisma.crypto.findUnique({
    where: { id: cryptoId },
  });

  if (!crypto) {
    res.status(404);
    return next(`Cannot GET /cryptos/${cryptoId}`);
  }

  res.json(crypto);
});

app.post("/cryptos", validate({ body: cryptoSchema }), async (req, res) => {
  const cryptoData: CryptoData = await req.body;
  const crypto = await prisma.crypto.create({
    data: cryptoData,
  });
  res.status(201).json(crypto);
});

app.post(
  "/cryptos/:id(\\d+)/photo",
  upload.single("photo"),
  async (req, res, next) => {
    if (!req.file) {
      res.status(400);
      return next("No photo file");
    }

    const photoFilename = req.file.filename;

    res.status(201).json({ photoFilename });
  }
);

app.put(
  "/cryptos/:id(\\d+)",
  validate({ body: cryptoSchema }),
  async (req, res, next) => {
    const cryptoId = Number(req.params.id);
    const cryptoData: CryptoData = await req.body;

    try {
      const crypto = await prisma.crypto.update({
        where: { id: cryptoId },
        data: cryptoData,
      });
      res.status(200).json(crypto);
    } catch (error) {
      res.status(404);
      next(`Cannot PUT crypto:${cryptoId}`);
    }
  }
);

app.delete(
  "/cryptos/:id(\\d+)",

  async (req, res, next) => {
    const cryptoId = Number(req.params.id);

    try {
      const crypto = await prisma.crypto.delete({
        where: { id: cryptoId },
      });
      res.status(204).end();
    } catch (error) {
      res.status(404);
      next(`Cannot delete crypto:${cryptoId}`);
    }
  }
);

app.use(validationErrorMiddleware);

export default app;
