const express = require("express");
const helpline = require("../controllers/helpline.controllers.js");

const router = express.Router();

router.get("/", helpline.getHelplines);

module.exports = router;
