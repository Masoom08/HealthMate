const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone, gender } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      gender,
      login_type: "email",
      is_logged_in: true,
    });

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      success: true,
      message: "Signup successful",
      user,
      token,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check email
    const user = await User.findOne({ email, is_deleted: false });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Password check (skip check if google login user)
    if (user.login_type === "email") {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: "Incorrect password" });
      }
    }

    user.is_logged_in = true;
    await user.save();

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.googleLogin = async (req, res) => {
  try {
    const { email, name, profile_pic_url } = req.body;

    let user = await User.findOne({ email });

    // If new Google user → create one
    if (!user) {
      user = await User.create({
        name,
        email,
        profile_pic_url,
        login_type: "google",
        is_logged_in: true,
      });
    } else {
      user.is_logged_in = true;
      await user.save();
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Google login successful",
      user,
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP (hashed for security)
    const hashedOtp = await bcrypt.hash(otp, 10);
    user.otp = hashedOtp;
    user.otp_expiry = Date.now() + 5 * 60 * 1000; // expires in 5 min
    await user.save();

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}, valid for 5 minutes.`,
    });

    res.json({ success: true, message: "OTP sent to email" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    if (!user.otp || !user.otp_expiry)
      return res.status(400).json({ success: false, message: "OTP not requested" });

    // Expired?
    if (Date.now() > user.otp_expiry)
      return res.status(400).json({ success: false, message: "OTP expired" });

    const isValid = await bcrypt.compare(otp, user.otp);
    if (!isValid)
      return res.status(400).json({ success: false, message: "Invalid OTP" });

    // OTP verified — allow password reset
    user.otp = null;
    user.otp_expiry = null;
    await user.save();

    res.json({ success: true, message: "OTP verified. You may reset password now." });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, new_password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    const hashedPassword = await bcrypt.hash(new_password, 10);

    user.password = hashedPassword;
    await user.save();

    res.json({
      success: true,
      message: "Password updated successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
