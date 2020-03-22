const tokenService = require("../services/tokenCreator");
const checkHash = require("../services/checkHash");
const userService = require("../services/user-service");

const signInUser = async (req, res) => {
  const user = req.body;
  console.log('signInUser start')
  try {
    const data = await userService.authUser(user);
    const userDB = data[0];
    if (!userDB) {
      res.status(401).send("invalid email or password");
    } else {
      const isHash = checkHash(user.password, userDB.password);
      if (isHash) {
        const accessToken = tokenService.accessToken(userDB.name, userDB.email);
        const refreshToken = tokenService.refreshToken(
          userDB.name,
          userDB.email
        );
        const activeUser = { name: userDB.name, id: userDB.id };
        res
          .cookie("accessToken", accessToken, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
          })
          .cookie("refreshToken", refreshToken, {
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
          })
          .json(activeUser);
          console.log('signInUser end')
      } else {
        res.status(401).send("invalid email or password");
      }
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = { signInUser };
