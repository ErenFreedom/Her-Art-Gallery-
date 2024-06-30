// /models/Comment.js
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  art: { type: mongoose.Schema.Types.ObjectId, ref: 'Art', required: true },
}, { timestamps: true });

const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
export default Comment;
