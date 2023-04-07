import supertest from "supertest";

import app from "./app";

import { prismaMock } from "./lib/prisma/client.mock";

const request = supertest(app);

test("GET /cryptos", async () => {
  const cryptos = [
    {
      id: 1,
      name: "bitcoin",
      value: 250,
      createdAt: "2023-04-02T20:48:48.212Z",
      updatedAt: "2023-04-02T20:49:02.881Z",
    },
  ];
  //@ts-ignore
  prismaMock.crypto.findMany.mockResolvedValue(cryptos);

  const response = await request
    .get("/cryptos")

    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toEqual(cryptos);
});
