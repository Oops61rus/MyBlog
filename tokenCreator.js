const jwt = require('jsonwebtoken');

module.exports = {
  tokenDay: () => {
    return jwt.sign({algorithm: 'HS256', expiresIn: '1 days'}, 'object')
  },
  tokenYear: () => {
    return jwt.sign({algorithm: 'HS256', expiresIn: '365 days'}, 'object')
  }
}
