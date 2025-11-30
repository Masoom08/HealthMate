const express = require("express");
const tips = require("../controllers/emergencyTips.controllers");

const router = express.Router();

router.get("/", tips.getEmergencyTips);

module.exports = router;
