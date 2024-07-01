// src/pages/api/auth/register.js
import User from '../../../../models/User';
import dbConnect from '../../../../config/db';
import CryptoJS from 'crypto-js';

export default async function register(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    console.log("Database connected in register endpoint");

    const { username, email, password, twitterHandle } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.ENCRYPTION_SECRET).toString();

    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
      twitterHandle,
    });

    await newUser.save();
    console.log("User registered successfully");
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error in register endpoint: ", error);
    res.status(500).json({ message: 'Server error' });
  }
}
