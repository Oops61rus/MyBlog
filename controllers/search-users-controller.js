const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

const searchUsers = (req, res) => {
  // let requiredUser = req.body.user;

  sequelize
    .query(`SELECT users.name, users.id WHERE (name = $requiredUser)`, {
      bind: {
        name: req.body.user.name
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
