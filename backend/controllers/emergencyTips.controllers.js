const EmergencyTip = require("../models/Emergency/EmergencyTips");

exports.getEmergencyTips = async (req, res) => {
  try {
    const tips = await EmergencyTip.find();

    return res.status(200).json({
      heading: "Emergency Response Tips",
      tips
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to fetch emergency tips",
      error: error.message
    });
  }
};
