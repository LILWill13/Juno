const jwt = require('jsonwebtoken');
require('dotenv').config()

// set token secret and expiration date
const secret = SECRET_TOKEN;
const expiration = EXPIRATION_TIME;

module.exports = {

  signToken: function ({ username, email }) {
    const payload = { username, email };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
}
