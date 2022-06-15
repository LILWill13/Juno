const jwt = require('jsonwebtoken');
require('dotenv').config()

// set token secret and expiration date
const secret = process.env.SECRET_TOKEN;
const expiration = process.env.EXPIRATION_TIME;

module.exports = {

  signToken: function ({ username, email }) {
    const payload = { username, email };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
}
