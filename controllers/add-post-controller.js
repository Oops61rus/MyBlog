const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const createPost = (req, res) => {
  const newPost = req.body;
  const activeUser = newPost.userId;

  sequelize
    .query(
      `INSERT INTO posts (title, date, text, author_id) VALUES ($title, $date, $text, $author_id)`,
      {
        bind: {
          title: newPost.title,
          date: newPost.date,
          text: newPost.text,
          author_id: activeUser,
        },
        type: QueryTypes.INSERT,
      }
    )
    .then(() => {
      res.status(200);
      res.json("Post created");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createPost };
