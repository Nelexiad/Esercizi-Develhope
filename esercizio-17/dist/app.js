"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const client_1 = __importDefault(require("./lib/prisma/client"));
const validation_1 = require("./lib/validation");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/cryptos", async (req, res) => {
    const cryptos = await client_1.default.crypto.findMany();
    res.json(cryptos);
});
app.get("/cryptos/:id(\\d+)", async (req, res, next) => {
    const cryptoId = Number(req.params.id);
    const crypto = await client_1.default.crypto.findUnique({
        where: { id: cryptoId },
    });
    if (!crypto) {
        res.status(404);
        return next(`Cannot GET /cryptos/${cryptoId}`);
    }
    res.json(crypto);
});
app.post("/cryptos", (0, validation_1.validate)({ body: validation_1.cryptoSchema }), async (req, res) => {
    const cryptoData = await req.body;
    const crypto = await client_1.default.crypto.create({
        data: cryptoData,
    });
    res.status(201).json(crypto);
});
app.put("/cryptos/:id(\\d+)", (0, validation_1.validate)({ body: validation_1.cryptoSchema }), async (req, res, next) => {
    const cryptoId = Number(req.params.id);
    const cryptoData = await req.body;
    try {
        const crypto = await client_1.default.crypto.update({
            where: { id: cryptoId },
            data: cryptoData,
        });
        res.status(200).json(crypto);
    }
    catch (error) {
        res.status(404);
        next(`Cannot PUT crypto:${cryptoId}`);
    }
});
app.delete("/cryptos/:id(\\d+)", async (req, res, next) => {
    const cryptoId = Number(req.params.id);
    try {
        const crypto = await client_1.default.crypto.delete({
            where: { id: cryptoId },
        });
        res.status(204).end();
    }
    catch (error) {
        res.status(404);
        next(`Cannot delete crypto:${cryptoId}`);
    }
});
app.use(validation_1.validationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map