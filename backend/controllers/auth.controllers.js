import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { genToken } from '../config/token.js';

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;

    if (!email || !userName || !password || !firstName || !lastName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const existUsername = await User.findOne({ userName });
    if (existUsername) {
      return res.status(400).json({ message: "Username already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
    });

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    const userData = user.toObject();
    delete userData.password;

    return res.status(201).json({ message: "User created successfully", user: userData });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const token = await genToken(user._id);

//     res.cookie("token", token, {
//       httpOnly: true,
//       maxAge: 30 * 24 * 60 * 60 * 1000,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//     });

//     // const userData = user.toObject();
//     // delete userData.password;

//     return res.status(200).json({ message: "Login successful", user: userData });

//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "login error" });
//   }
// };

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // ✅ Add this to remove password before sending user data
    // const userData = user.toObject();
    // delete userData.password;

    return res.status(200).json({ message: "Login successful", user: userData });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "login error" });
  }
};

export const logOut = async (req, res) =>{
  try {
    res.clearCookie("token")
    return res.status(200).json({ message: "Logged out successfully" });
  
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Logout error" });
  }
}
