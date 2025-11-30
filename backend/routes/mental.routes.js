const express = require("express");
const mental = require("../controllers/mental.controller");
const { validateMentalQuery } = require("../validator/mental.validator");
const router = express.Router();

router.get("/search", validateMentalQuery,mental.searchMentalVideos);

module.exports = router;