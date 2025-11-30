const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        trim: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,     // prevents index error if email is null (google login)
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      default: null,     // can be empty for Google login
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,       // prevents errors when NULL
    },
    gender: {
      type: String,
      enum: ["male", "female", "other", ""],
      default: "",
    },
    profile_pic_url: {
      type: String,
      default: "",
    },
    otp: {
        type: String,
        default: null
    },
    otp_expiry: {
        type: Date,
        default: null
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
    is_logged_in: {
      type: Boolean,
      default: false,
    },
    login_type: {
      type: String,
      enum: ["email", "google"],
      required: true,
      default: "email",
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  }
);

module.exports = mongoose.model("User", UserSchema);
