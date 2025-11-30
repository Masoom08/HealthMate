const express = require("express");
const auth = require("../controllers/auth.controllers");

const router = express.Router();

router.post("/signup", auth.signup);
router.post("/login", auth.login);
router.post("/google", auth.googleLogin);  // google oauth login
router.post("/send-otp", auth.sendOtp);
router.post("/verify-otp", auth.verifyOtp);
router.post("/reset-password", auth.resetPassword);

module.exports = router;
