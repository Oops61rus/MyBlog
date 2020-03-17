require("dotenv").config();
const privateKey = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const path = require("path");
const base = process.cwd();

const checkToken = (req, res, next) => {
  const token = req.cookies.refreshToken;

  jwt.verify(token, privateKey, (err, decoded) => {
    console.log(decoded, token)
    if(decoded) {
      req.userName = decoded.data.name;
      req.userEmail = decoded.data.email;
      req.userId = decoded.data.id;
      res.sendFile(path.join(base, '/public/home.html'));
      next();
      } else if(req.originalUrl === '/' || '' || '/sign-in') {
        res.sendFile(path.join(base, '/public/sign-in.html'));

      } else if(req.originalUrl === '/sign-up') {

        res.sendFile(path.join(base, '/public/sign-up.html'));

      } else {

        res.redirect('/signIn');

      }
    });
};

module.exports = checkToken;
