const mongoose = require("mongoose");

const EmergencyTipSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    imageUrl: { type: String, required: true },
    points: { type: [String], required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("EmergencyTip", EmergencyTipSchema);
