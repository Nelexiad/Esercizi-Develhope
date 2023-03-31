const { createServer } = require("node:http");

function createApp() {
  return createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<html><body><h1>Welcome to the World Wide Web!</h1></body></html>"
    );
  });
}

module.exports = createApp;
