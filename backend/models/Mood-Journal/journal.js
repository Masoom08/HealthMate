const mongoose = require("mongoose");

const TypographySchema = new mongoose.Schema({
  bold: { type: Boolean, default: false },
  italic: { type: Boolean, default: false },
  underline: { type: Boolean, default: false },
  fontStyle: { type: String, default: "normal" },
  fontSize: { type: Number, default: 14 }
}, { _id: false });

const JournalSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  heading: { type: String, required: true },
  content: { type: String, required: true  },
  tags: [{ type: String}],
  typography: {type: TypographySchema,default: {}},
  is_deleted: { type: Boolean, default: false },

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

module.exports = mongoose.model("Journal", JournalSchema);
