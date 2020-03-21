const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize"); // свойство QueryTypes из объекта sequelize

module.exports = {
  registerUser: async data => {
    try {
      const result = await sequelize.query(
        `INSERT INTO users (email, name, password, refresh_token) VALUES ($email, $name, $password, $refresh_token) RETURNING id, name`,
        {           // вставить в таблицу users значения и вернуть id и name  
          bind: {   //  присваиваем полям значения user.name, user.email, user.password 
            name: data.name,
            email: data.email,
            password: data.password,
            refresh_token: data.refresh_token
          },
          type: QueryTypes.INSERT
        }
      );
      return result;
    } catch (err) {
      return err;
    }
  },

  authUser: async data => {
    console.log(data)
    try {
      const result = await sequelize.query(
        `SELECT * FROM users WHERE (email = email) `,
        {
          bind: {
            email: data.email
          },
          type: QueryTypes.SELECT
        }
      );
      return result;
    } catch (err) {
      return err;
    }
  }
};
