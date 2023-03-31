import { log } from "node:console";
import { createServer } from "node:http";

const sever = createServer((req, res) => {
  console.log("req received");

  res.statusCode = 200;

  res.setHeader("Content-type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  res.end(jsonResponseBody);
});

sever.listen(3080, () => {
  console.log("server in http://localhost:3080");
});
