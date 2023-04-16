const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { page: "Index" });
});

app.get("/salem.html", (req, res) => {
  res.render("salem", { page: "Salem" });
});

app.get("/eugene.html", (req, res) => {
  res.render("eugene", { page: "Eugene" });
});

app.get("/portland.html", (req, res) => {
  res.render("portland", { page: "Portland" });
});

app.listen(port, () => {
  console.log(`Listening at at http://localhost:${port}`);
});
