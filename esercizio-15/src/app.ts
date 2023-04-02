import express from "express";
import "express-async-errors";
import prisma from "./lib/prisma/client";

const app = express();

app.get("/cryptos", async (req, res) => {
  const cryptos = await prisma.crypto.findMany();

  res.json(cryptos);
});

export default app;
