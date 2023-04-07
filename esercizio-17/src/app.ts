import express from "express";
import "express-async-errors";
import prisma from "./lib/prisma/client";
import {
  validate,
  CryptoData,
  cryptoSchema,
  validationErrorMiddleware,
} from "./lib/validation";

const app = express();

app.use(express.json());

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

app.use(validationErrorMiddleware);

export default app;
