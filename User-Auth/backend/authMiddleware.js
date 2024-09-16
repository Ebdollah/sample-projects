// authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization');

  if (!token) {
    console.log('No token provided');
    return res.sendStatus(401); // Unauthorized
  }

  // Verify the token
  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      console.log('Token verification failed');
      return res.sendStatus(403); // Forbidden
    }

    console.log('Token verified successfully');
    req.user = user; // Attach user details to the request object
    next();
  });
};

module.exports = { authenticateToken };
//For now it is not working