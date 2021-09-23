const express = require("express");
const router = express.Router();
// const jwt = require("./jwt");
const Backs = require("./models/back_schema");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");

router.get("/data", (req, res) => {
  console.log(req.body);
  res.json({ result: "data ok" });
});

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    // req.body.password = await bcrypt.hash(req.body.password, 8);
    await Users.create(req.body);
    res.json({ result: "ok", message: "Register successfully" });
  } catch (err) {
    res.json({ result: "nok", message: err.errmsg });
  }
});

module.exports = router;
