const config = require('./config')
const Sequelize = require("sequelize"); // подключение СУБД
const sequelize = new Sequelize(...config)

sequelize
  .authenticate() // метод аутентификации с БД
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.error("Unable to connect to db", err);
  });

module.exports = sequelize; // экспорт модуля
