const express = require("express");
const router = express.Router();
// const jwt = require("./jwt");
// const Products = require("./models/product_schema");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");

router.get("/data", (req, res) => {
  console.log(req.body);
  res.json({ result: "data ok" });
});

module.exports = router;
