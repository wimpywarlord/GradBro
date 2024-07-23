const jwt = require("jsonwebtoken");

const authenticationTokenChecker = (req, res, next) => {
  console.log("Authentication Token Checker Middleware Triggered");

  // Middleware function to check if the user is authenticated
  const authHeader = req.headers['authorization']; // ! HEADER NAMES ARE CASE-INSENSITIVE
  const token = authHeader && authHeader.split(" ")[1]; // ! THIS IS TO DIFFERETIATE BETWEEN TYPE OF TOKEN (BEARER, BASIC, ETC.)

  if (!token || token === "null" || token === "undefined" || token === "false" || token === "0" || token === "NaN") {
    console.log("Token does not exist")
    return res.status(401).json({ message: "Access Denied" })
  };

  try {
    const verification = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verification.userId;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired authorization token" });
  }
};

module.exports = authenticationTokenChecker;