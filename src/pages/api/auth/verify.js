// pages/api/auth/verify.js
import User from '../../../../models/User';
import VerificationToken from '../../../../models/VerificationToken';
import dbConnect from '../../../../config/db';

export default async function verify(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const { token } = req.query;

    const verificationToken = await VerificationToken.findOne({ token });

    if (!verificationToken) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const user = await User.findById(verificationToken.userId);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    user.isVerified = true;
    await user.save();

    await VerificationToken.deleteOne({ token });

    res.writeHead(302, { Location: '/verify-success' });
    res.end();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
