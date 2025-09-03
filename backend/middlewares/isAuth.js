// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Adjust the path as needed

// const isAuth = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'No token provided' });
//     }

//     const token = authHeader.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(401).json({ message: 'User does not exist' });
//     }

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = isAuth;



import jwt from 'jsonwebtoken';
const isAuth = async (req, res, next) => {
  try {
    let {token} = req.cookies;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    console.log(decoded);
    req.user = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'isAuth error' });
  }
};

export default isAuth;