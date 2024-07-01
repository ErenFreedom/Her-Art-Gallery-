// /models/User.js
import mongoose from 'mongoose';
import CryptoJS from 'crypto-js';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  twitterHandle: { type: String, required: false },
  nsfwAccess: { type: Boolean, default: false },
}, { timestamps: true });

// Method to compare passwords
UserSchema.methods.matchPassword = function (enteredPassword) {
  const decryptedPassword = CryptoJS.AES.decrypt(this.password, process.env.ENCRYPTION_SECRET).toString(CryptoJS.enc.Utf8);
  return enteredPassword === decryptedPassword;
};

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
