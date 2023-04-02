const request = require("supertest");
import app from "./app";

describe("GET /", () => {
  it("responds with a JSON message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ itWorks: "true" });
    expect(response.header["content-type"]).toMatch(/json/);
  });
});
