const express = require("express");
const router = express.Router();
// const jwt = require("./jwt");
const Backs = require("./models/back_schema");
const Fronts = require("./models/front_schema");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");

router.post("/transaction", async (req, res) => {
  console(JSON.stringify(req));
  try {
    req.body.staff_id = req.userId;
    let doc = await Trans.create(req.body);
    res.json({ result: "ok", message: doc });
  } catch (error) {
    res.json({ result: "nok", message: error });
  }
});

router.get("/transaction", (req, res) => {
  Trans.aggregate([
    {
      $match: {},
    },
    {
      $lookup: {
        from: "users",
        localField: "staff_id",
        foreignField: "_id",
        as: "staff_id",
      },
    },
    {
      $unwind: "$staff_id",
    },
  ])
    .sort({ timestamp: -1 })
    .then((result) => {
      result = result.map((item) => {
        item.staff_id = item.staff_id.username;
        return item;
      });
      res.json(result);
    });
});

router.post("/back", async (req, res) => {
  try {
    req.body.staff_id = req.userId;
    let doc = await Backs.create(req.body);
    res.json({ result: "ok", message: doc });
  } catch (error) {
    res.json({ result: "nok", message: error });
  }
});

router.get("/back", (req, res) => {
  Backs.aggregate([])
    .sort({ timestamp: -1 })
    .then((result) => {
      result = result.map((item) => {
        return item;
      });
      res.json(result);
    });
});

router.post("/front", async (req, res) => {
  try {
    req.body.staff_id = req.userId;
    let doc = await Fronts.create(req.body);
    res.json({ result: "ok", message: doc });
  } catch (error) {
    res.json({ result: "nok", message: error });
  }
});

module.exports = router;
