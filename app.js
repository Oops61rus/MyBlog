const express = require("express"); // фреймворк для приложений Node.js
const path = require("path"); // утилиты для работы с файлами и путями
const cors = require("cors"); // для безопасности (разрешать запросы от моего имени, запрещать от других)
const bodyParser = require("body-parser"); // промежуточное ПО для анализа тела Node.js

const signUpRouter = require("./routes/rest/signUp"); // путь к маршрутизатору
const signInRouter = require("./routes/rest/signIn"); // путь к маршрутизатору

const signUpPageRouter = require("./routes/pages/signUp-page");
const signInPageRouter = require("./routes/pages/signIn-page");

const app = express();
const base = process.cwd(); // место где запущено приложение в системе (папка MyBlog)

app.use(cors()); // запуск библиотеки CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(base, "/public")));

app.use("/signUp", signUpPageRouter);
app.use("/", signInPageRouter);

app.use("/api/v1/signUp", signUpRouter);
app.use("/api/v1/signIn", signInRouter);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

module.exports = app;
