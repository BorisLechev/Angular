const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Not authenticated.'
    });
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, 's0m3 r4nd0m str1ng', (error, decoded) => {
    // the 401 code is for unauthorized status
    if (error) {
      return res.status(401).json({
        message: 'Token is invalid.', error
      });
    }

    const userId = decoded.sub;

    User.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: "Cannot find this user."
          });
        }

        req.user = user;

        return next();
      });
  });
};