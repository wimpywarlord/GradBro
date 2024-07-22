const jwt = require("jsonwebtoken");

const authenticationTokenChecker = (req, res, next) => {
  const authHeader = req.headers['authorization']; // ! HEADER NAMES ARE CASE-INSENSITIVE
  const token = authHeader;

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verification = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verification.userId;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid authorization token" });
  }
};

module.exports = authenticationTokenChecker;