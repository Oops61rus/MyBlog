const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const base = process.cwd();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(base, "/public")));

app.use((req, res, next) => {
  const url = req.path;
  if (
    req.cookies.refreshToken ||
    (url !== "/" && url.match(/(signIn|signUp)$/i))
  ) {
    next();
  } else {
    res.redirect("/signIn");
  }
}, express.static(path.join(base, "/authPages")));

const signUpRouter = require("./routes/rest/signUp");
const signInRouter = require("./routes/rest/signIn");
const usersRouter = require("./routes/rest/users");
const postsRouter = require("./routes/rest/posts");

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
app.use("/api/v1/posts", postsRouter);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

module.exports = app;
