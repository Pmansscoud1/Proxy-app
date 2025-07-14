const express = require("express");
const request = require("request");
const app = express();

const TARGET = "https://siyavula.com"; // CHANGE THIS TO YOUR TARGET

app.use("/", (req, res) => {
  const url = TARGET + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy server running...");
});
