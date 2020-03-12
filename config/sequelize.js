const Sequelize = require('sequelize');       // подключение СУБД
const config = require('./config');           // подключение файла config
const sequelize = new Sequelize(...config);   // создаем класс Sequelize с параметрами из файла config

sequelize.authenticate()                      // метод аутентификации с БД
  .then(() => {
    console.log('Connected');
  })
  .catch( err => {
    console.error('Unable to connect to db', err);
  });

module.exports = sequelize;    // экспорт модуля
