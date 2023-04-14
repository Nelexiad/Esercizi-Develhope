import { Static, Type } from "@sinclair/typebox";

export const cryptoSchema = Type.Object(
  {
    name: Type.String(),
    value: Type.Integer(),
  },
  { additionalProperties: false }
);

export type CryptoData = Static<typeof cryptoSchema>;
