import express, { Router } from 'express';

import prisma from '../lib/prisma/client';



import {
  validate,
  CryptoData,
  cryptoSchema,
  validationErrorMiddleware,
} from "../lib/validation";

import { initMulterMiddleware } from "../lib/middleware/multer";

const upload = initMulterMiddleware();

const router = Router()

router.get("/cryptos", async (req, res) => {
    const cryptos = await prisma.crypto.findMany();
  
    res.json(cryptos);
  });
  
  router.get("/cryptos/:id(\\d+)", async (req, res, next) => {
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
  
  router.post("/cryptos", validate({ body: cryptoSchema }), async (req, res) => {
    const cryptoData: CryptoData = await req.body;
    const crypto = await prisma.crypto.create({
      data: cryptoData,
    });
    res.status(201).json(crypto);
  });
  
  router.post(
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
  
  router.put(
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
  
  router.delete(
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
  
export default router;
  