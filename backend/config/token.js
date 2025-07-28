
import jwt from 'jsonwebtoken';
const genToken =  async (userId) => {
  try {
    let token = await jwt.sign({userId}, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });
    return token;
  } catch (error) {
    console.log(error);
  }
}

export  {genToken};
