const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Github Actions Testing");
});

app.listen(5000, (req, res) => {
  console.log("Server is up and running");
});
