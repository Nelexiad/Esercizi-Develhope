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

app.post("/cryptos", validate({ body: cryptoSchema }), async (req, res) => {
  const crypto: CryptoData = await req.body;
  res.status(201).json(crypto);
});

app.use(validationErrorMiddleware);

export default app;
