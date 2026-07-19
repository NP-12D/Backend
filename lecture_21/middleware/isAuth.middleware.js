const jwt = require("jsonwebtoken");

async function isAuth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Authorization header required" });
  }
  const [type, token] = authorization.trim().split(" ");
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "permission denied" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //  console.log(payload);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
}

module.exports = isAuth;
