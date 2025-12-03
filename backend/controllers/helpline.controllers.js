const HelplineCategory =require("../models/Emergency/HelplineCategory");

exports.getHelplines = async (req, res) => {
  try {
    const categories = await HelplineCategory.find().sort({ category: 1 });

    return res.status(200).json({
      heading: "Support Helplines",
      description:
        "Instant access to trusted Mental Health, Physical Emergency, and Specialized Care helplines.",
      categories
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to fetch helplines",
      error: error.message
    });
  }
};
