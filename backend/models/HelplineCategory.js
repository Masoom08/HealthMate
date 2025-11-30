const mongoose = require("mongoose");

const HelplineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  number: {
    type: String,
    required: true,
    trim: true
  }
});

const HelplineCategorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true
    },
    helplines: {
      type: [HelplineSchema],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("HelplineCategory", HelplineCategorySchema);