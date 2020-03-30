require("dotenv").config();

module.exports = [
  // настройки для файла sequelize и подключения БД
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define: {
      timestamps: process.env.TIMESTAMPS
    }
  }
];
