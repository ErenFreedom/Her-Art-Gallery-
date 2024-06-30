// /models/View.js
import mongoose from 'mongoose';

const ViewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  art: { type: mongoose.Schema.Types.ObjectId, ref: 'Art', required: true },
}, { timestamps: true });

const View = mongoose.models.View || mongoose.model('View', ViewSchema);
export default View;
