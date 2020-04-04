require("dotenv").config();
const privateKey = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;
  jwt.verify(refreshToken, privateKey, (err, decoded) => {
    if (decoded) {
      req.userName = decoded.data.name;
      req.userEmail = decoded.data.email;
      req.userId = decoded.data.id;
      next();
    } else {
      res.redirect("/signIn");
    }
  });
};

module.exports = checkToken;
