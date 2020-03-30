const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const getMyPosts = (req, res) => {
  const activeUser = req.userId;

  sequelize
    .query(`SELECT * FROM posts WHERE author_id = $author_id`, {
      bind: {
        author_id: activeUser
      },
      type: QueryTypes.SELECT
    })
    .then(posts => {
      posts.forEach(item => {
        item.name = userName;
      });
      res.json(posts);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = { getMyPosts };
