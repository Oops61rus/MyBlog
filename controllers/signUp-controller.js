require('dotenv').config();
const domain = process.env.DOMAIN;
const sequelize = require('../config/sequelize');
const tokenService = require('../services/tokenCreator.js');
const createHash = require('../services/createHash');
const { QueryTypes } = require('sequelize');        // свойство QueryTypes из объекта sequelize

const createUser = (req, res) => {
  const user = req.body;
  const accessToken = tokenService.accessToken(user.name, user.email);
  const refreshToken = tokenService.refreshToken(user.name, user.email);
  
  user.password = createHash(user.password);

  sequelize.query(`INSERT INTO users (email, name, password) VALUES ($email, $name, $password) RETURNING id, name`, // вставить в таблицу users
  {               //  значения и вернуть id и name
    bind: {       //  присваиваем полям значения user.name, user.email, user.password 
      name: user.name,
      email: user.email,
      password: user.password
    },
    type: QueryTypes.SELECT
  })
  .then((user) => {
    res
    .cookie('accessToken', accessToken, { domain, maxAge: 864000000})
    .cookie('refreshToken', refreshToken, { domain, maxAge: 31536000000})
    .status(201).json('Registration successfully!')
    console.log(user);
  })
  .catch(err => {
    console.log(err)
    res
    .status(401).json('Email is not unique')
  })
}

module.exports = { createUser };