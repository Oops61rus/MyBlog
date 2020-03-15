const sequelize = require("../config/sequelize");
const tokenService = require("../services/tokenCreator");
const checkHash = require("../services/checkHash");

const signInUser = (req, res) => {
  const user = req.body;

  sequelize
    .query(`SELECT * FROM users WHERE (email = '${user.email}')`)
    .then(data => {
      if (!data) {
        res.status(201).send("invalid email or password");
      } else {
        let isHash = checkHash(user.password, data.password);
        if (isHash) {
          let activeUser = { name: data.name, id: data.id };
          res.json([
            activeUser.name,
            activeUser.id,
            tokenService.accessToken,
            tokenService.refreshToken
          ]);
        } else {
          res.status(201).send("invalid email or password");
        }
      }
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(401);
    });
};

module.exports = { signInUser };
