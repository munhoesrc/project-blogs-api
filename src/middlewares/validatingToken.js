require('dotenv').config();
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;
// fazer análise do token
const doTokenAnalysis = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decrypted = jwt.verify(token, TOKEN_SECRET);
    req.user = decrypted;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = doTokenAnalysis;