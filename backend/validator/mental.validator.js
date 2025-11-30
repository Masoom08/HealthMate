function validateMentalQuery(req, res, next) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Query required" });
  }

  const allowedContexts = [
    "guided meditation",
    "peaceful music",
    "calm sleep",
    "sleep music",
    "deep breathing",
    "relaxation",
    "mindfulness",
    "yoga nidra",
    "stress relief",
    "focus music"
  ];

  const lowerQuery = query.toLowerCase();

  const isAllowed = allowedContexts.some(context =>
    lowerQuery.includes(context)
  );

  if (!isAllowed) {
    return res.status(403).json({ error: "No such context allowed" });
  }

  // If validation passes
  next();
}

module.exports = { validateMentalQuery };