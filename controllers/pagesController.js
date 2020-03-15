const path = require("path"); // модуль для работы с путями к файлам и каталогам
const base = process.cwd(); // место где запущено приложение в системе (папка MyBlog)

const urlPage = url => (req, res) => {
  // сюда буду передавать URL моего файла относительно переменной base (папки MyBlog)
  res.sendFile(path.join(base, url));
};

module.exports = { urlPage };
