const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const searchUsers = (req, res) => {
  sequelize
    .query(`SELECT name, id FROM users WHERE name = $name`, {
      bind: {
        name: req.query.user
      },
      type: QueryTypes.SELECT
    })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err)
      res.json("User not found")
    });
};

module.exports = { searchUsers };
