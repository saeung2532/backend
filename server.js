const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/uploaded"));
app.use("/api/v2", require("./api"));

app.listen(3001, () => {
  console.log("Running...");
});