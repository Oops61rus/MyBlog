module.exports = [
  // настройки для файла sequelize и подключения БД
  "blog",
  "postgres",
  "123",
  {
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false
    }
  }
];
