import express from "express";
import "express-async-errors";
require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("it works");
});

app.listen(port, () => {
  console.log(`server on ${port}`);
});

module.exports = app;
