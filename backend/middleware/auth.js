const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Expecting token in header: Authorization: Bearer <token>
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = { id: decoded.userId };

    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;
