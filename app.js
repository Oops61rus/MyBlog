const express = require("express"); // фреймворк для приложений Node.js
const path = require("path"); // утилиты для работы с файлами и путями
const cors = require("cors"); // для безопасности (разрешать запросы от моего имени, запрещать от других)
const bodyParser = require("body-parser"); // промежуточное ПО для анализа тела Node.js
const cookieParser = require("cookie-parser");
const app = express();
const base = process.cwd(); // место где запущено приложение в системе (папка MyBlog)

app.use(cors()); // запуск библиотеки CORS
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(base, "/public")));

const signUpRouter = require("./routes/rest/signUp");
const signInRouter = require("./routes/rest/signIn");
const usersRouter = require("./routes/rest/users");
// const addPostRouter = require("./routes/rest/add-post");
// const myPostsRouter = require("./routes/rest/my-posts");

const signUpPageRouter = require("./routes/pages/signUp-page");
const signInPageRouter = require("./routes/pages/signIn-page");
const homePageRouter = require("./routes/pages/home-page");
const addPostPageRouter = require("./routes/pages/addPost-page");
const myPostsPageRouter = require("./routes/pages/myPosts-page");
const friendsPostsPageRouter = require("./routes/pages/friendsPosts-page");

app.use("/signUp", signUpPageRouter);
app.use("/", signInPageRouter);
app.use("/home", homePageRouter);
app.use("/add-post", addPostPageRouter);
app.use("/my-posts", myPostsPageRouter);
app.use("/friends-posts", friendsPostsPageRouter);

app.use("/api/v1/signUp", signUpRouter);
app.use("/api/v1/signIn", signInRouter);
app.use("/api/v1/users", usersRouter);
// app.use("/api/v1/add-post", addPostRouter);
// app.use("/api/v1/my-posts", myPostsRouter);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

module.exports = app;
