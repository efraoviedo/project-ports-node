const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: __dirname });
});
app.all("*", (req, res) => {
  res.sendFile("404.html", { root: __dirname });
});
