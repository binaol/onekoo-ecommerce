const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const Auths = {};

Auths.authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

Auths.authMiddlewareAdmin = (req, res, next) => {
  const token = req.cookies.token2;
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = Auths;
