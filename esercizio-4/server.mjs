import { log } from "node:console";
import { createServer } from "node:http";

const sever = createServer((req, res) => {
  console.log("req received");

  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<html><body><h1>Everything work?!</html></body></h1>");
});

sever.listen(3080, () => {
  console.log("server in http://localhost:3080");
});
