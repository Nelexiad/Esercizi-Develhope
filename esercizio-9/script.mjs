import * as fs from "node:fs";

fs.readFile("text.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
