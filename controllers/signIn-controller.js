const sequelize = require('sequelize');
const tokenService = require('../services/tokenCreator');

const signInUser = (req, res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  sequelize.query(`SELECT * FROM users WHERE (email = '${userEmail}')`)
}