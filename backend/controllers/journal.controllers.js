const Journal = require("../models/Mood-Journal/journal.js");

/** Create Journal */
exports.createJournal = async (req, res) => {
  try {
    const { user_id, heading, content, tags, typography } = req.body;

    const journal = await Journal.create({
      user_id: req.user.id,
      heading,
      content,
      tags,
      typography
    });

    res.status(201).json({ success: true, journal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/** Get all journals by user */
exports.getUserJournals = async (req, res) => {
  try {
    const journals = await Journal.find({
      user_id: req.user.id,
      is_deleted: false
    }).sort({ created_at: -1 });

    res.status(200).json({ success: true, journals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/** Get single Journal */
exports.getJournalById = async (req, res) => {
  try {
    const journal = await Journal.findOne({
      _id: req.params.id,
      user_id: req.user.id,
      is_deleted: false
    });

    if (!journal) return res.status(404).json({ message: "Journal not found" });

    res.status(200).json({ success: true, journal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/** Update Journal */
exports.updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findByIdAndUpdate(
      { _id: req.params.id, user_id: req.user.id },
      { ...req.body },
      { new: true }
    );

    if (!journal) return res.status(404).json({ message: "Journal not found" });

    res.status(200).json({ success: true, journal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/** Soft Delete Journal */
exports.deleteJournal = async (req, res) => {
  try {
    await Journal.findByIdAndUpdate(
      { _id: req.params.id, user_id: req.user.id },
      { is_deleted: true });

    if (!Journal) return res.status(404).json({ message: "Journal not found" });

    res.status(200).json({ success: true, message: "Journal deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
