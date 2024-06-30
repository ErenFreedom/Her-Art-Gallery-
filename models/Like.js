// /models/Like.js
import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  art: { type: mongoose.Schema.Types.ObjectId, ref: 'Art', required: true },
}, { timestamps: true });

const Like = mongoose.models.Like || mongoose.model('Like', LikeSchema);
export default Like;
