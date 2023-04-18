const express = require("express");
const app = express();
const useHttps = require("force-https");
const port = 3000;
const path = require("path");
const mime = require("mime-types"); //auto content type

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/styles.css", function (req, res) {
  res.set("Content-Type", mime.contentType(path.extname(req.url)));
});

//redirect from root to home
app.get("/", (req, res) => {
  res.redirect("/oregon.html");
});

app.get("/main.js", function (req, res) {
  res.set("Content-Type", mime.contentType(path.extname(req.url)));
});

app.get("/oregon.html", (req, res) => {
  res.render("oregon", { page: "Home", layout: "views/layout.pug" });
});

app.get("/salem.html", (req, res) => {
  res.render("salem", { page: "Salem", layout: "views/layout.pug" });
});

app.get("/eugene.html", (req, res) => {
  res.render("eugene", { page: "Eugene", layout: "views/layout.pug" });
});

app.get("/portland.html", (req, res) => {
  res.render("portland", { page: "Portland", layout: "views/layout.pug" });
});

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("public"));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("error");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
