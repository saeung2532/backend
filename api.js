const express = require("express");
const router = express.Router();
require("./db");

router.use(require("./api_data"));
router.use(require("./api_transaction"));

module.exports = router;
