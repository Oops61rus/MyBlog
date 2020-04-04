const sequelize = require("../config/sequelize");

const getFriendsPost = (req, res) => {
  const activeUserId = req.query.userId;

  sequelize.query(
    `SELECT * FROM posts RIGHT JOIN users ON posts.author_id = users.id IN (SELECT following FROM followers WHERE follower = $follower) AND posts.author_id IS NOT null`, {
      bind: {
        follower: activeUserId
      }, 
      type: QueryTypes.SELECT
    })
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.send(err)
    });
};

module.exports = { getFriendsPost };