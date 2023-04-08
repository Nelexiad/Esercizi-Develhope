"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.cryptoSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    value: typebox_1.Type.Integer(),
}, { additionalProperties: false });
//# sourceMappingURL=crypto.js.map