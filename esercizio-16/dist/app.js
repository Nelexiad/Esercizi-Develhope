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
app.post("/cryptos", (0, validation_1.validate)({ body: validation_1.cryptoSchema }), async (req, res) => {
    const crypto = await req.body;
    res.status(201).json(crypto);
});
exports.default = app;
//# sourceMappingURL=app.js.map