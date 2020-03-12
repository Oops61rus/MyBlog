const sequelize = require('../config/sequelize');
const tokenService = require('../services/tokenCreator.js');
const createHash = require('../services/createHash');

const createUser = (req, res) => {
  const user = req.body;
  const accessToken = tokenService.accessToken(user.name, user.email);
  const refreshToken = tokenService.refreshToken(user.name, user.email);
  
  user.password = createHash(user.password);

  sequelize.query(`INSERT INTO users (email, name, password) VALUES ('${user.email}', '${user.name}', '${user.password}') RETURNING id, name`)
  .then((user) => {
    res
    .cookie('accessToken', accessToken, { domain: 'http://localhost:3000/', maxAge: 864000000})
    .cookie('refreshToken', refreshToken, { domain: 'http://localhost:3000/', maxAge: 31536000000})
    .status(201).json('Registration succsess!')
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = { createUser };