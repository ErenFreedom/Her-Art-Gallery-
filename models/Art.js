// /models/Art.js
import mongoose from 'mongoose';

const ArtSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: true },
  nsfw: { type: Boolean, default: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Art = mongoose.models.Art || mongoose.model('Art', ArtSchema);
export default Art;
