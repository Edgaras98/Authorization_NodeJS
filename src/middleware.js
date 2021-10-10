const jwt = require('jsonwebtoken');
const { jswtSecret } = require('./config');

module.exports = {
  isLoggedin: (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      jwt.verify(token, jswtSecret);
      next();
    } catch (err) {
      res.status(401).send({ err: 'failed to authorizate' });
    }
  },
};
