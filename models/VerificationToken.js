import mongoose from 'mongoose';

const VerificationTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: 3600, // Token expires in 1 hour
  },
});

const VerificationToken = mongoose.models.VerificationToken || mongoose.model('VerificationToken', VerificationTokenSchema);
export default VerificationToken;
