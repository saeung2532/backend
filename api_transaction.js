const express = require("express");
const router = express.Router();
// const Trans = require("./models/trans_schema");
// const jwt = require("./jwt");

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
      $match: {}
    },
    {
      $lookup: {
        from: "users",
        localField: "staff_id",
        foreignField: "_id",
        as: "staff_id"
      }
    },
    {
      $unwind: "$staff_id"
    }
  ])
    .sort({ timestamp: -1 })
    .then(result => {
      result = result.map(item => {
        item.staff_id = item.staff_id.username;
        return item;
      });
      res.json(result);
    });
});

module.exports = router;
