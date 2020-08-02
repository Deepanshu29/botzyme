const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const cor = require("cors");
const api = require("./Router/routes");
require('dotenv').config();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, "dist/botzymeFront")));
app.use(cor());

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("<h1>Botzyme</h1> ");
});

app.listen(port, () => {
  console.log(`Server ruunning on ${port}`);
});
