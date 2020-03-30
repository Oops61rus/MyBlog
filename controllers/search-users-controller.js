const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const searchUsers = (req, res) => {
  sequelize
    .query(`SELECT name, id FROM users WHERE name = $name`, {
      bind: {
        name: req.body.user
      },
      type: QueryTypes.SELECT
    })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = { searchUsers };
