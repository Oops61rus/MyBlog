require("dotenv").config();
const privateKey = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const path = require("path");
const base = process.cwd();

// const checkToken = (req, res, next) => {
// const token = req.cookie.refreshToken;

// jwt.verify(token, privateKey, (decoded, err) => {
//   if(decoded) {
//     req.userName = decoded.data.name;
//     req.userEmail = decoded.data.email;
//     req.userId = decoded.data.id;
//     console.log(decoded);
//     next();
//     } else if(req.originalUrl === '/' || '' || '/signIn') {

//       res.sendFile(path.join(base, '/public/signIn.html'));

//     } else if(req.originalUrl === '/signUp') {

//       res.sendFile(path.join(base, '/public/signUp.html'));

//     } else {

//       res.redirect('/signIn');

//     }
//   });
// };

// module.exports = checkToken;