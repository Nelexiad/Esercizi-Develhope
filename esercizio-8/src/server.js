const createApp = require("./app.js");

const app = createApp();

app.listen(3080, () => {
  console.log("server at http://localhost:3080");
});
