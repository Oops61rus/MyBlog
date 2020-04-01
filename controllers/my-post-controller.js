const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const getMyPosts = (req, res) => {
  const activeUserId = req.query.userId;
  const activeUserName = req.query.userName;

  sequelize
    .query(`SELECT * FROM posts WHERE author_id = $author_id`, {
      bind: {
        author_id: activeUserId
      },
      type: QueryTypes.SELECT
    })
    .then(posts => {
      console.log(posts)
      posts.forEach(item => {
        item.name = activeUserName;
      });
      res.json(posts);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = { getMyPosts };
