// pages/api/auth/register.js
import User from '../../../../models/User';
import VerificationToken from '../../../../models/VerificationToken';
import dbConnect from '../../../../config/db';
import CryptoJS from 'crypto-js';
import sendVerificationEmail from '../../../utils/sendEmail';
import crypto from 'crypto';

export default async function register(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const { username, email, password, twitterHandle } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or Username already exists' });
    }

    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.ENCRYPTION_SECRET).toString();

    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
      twitterHandle,
    });

    await newUser.save();

    const token = crypto.randomBytes(32).toString('hex');
    const verificationToken = new VerificationToken({
      userId: newUser._id,
      token,
      expiresAt: Date.now() + 3600000, // Token expires in 1 hour
    });

    await verificationToken.save();

    const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify?token=${token}`;
    await sendVerificationEmail(newUser.email, verificationUrl);

    res.status(201).json({ message: 'User registered successfully. Please check your email to verify your account.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
