// src/pages/api/arts.js
import dbConnect from '../../../config/db';
import Art from '../../../models/Art';

export default async (req, res) => {
  await dbConnect();

  const { filter, page = 1 } = req.query;
  const limit = 8;
  const skip = (page - 1) * limit;
  let query = {};

  if (filter === 'today') {
    query = { createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 1)) } };
  } else if (filter === 'week') {
    query = { createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 7)) } };
  } else if (filter === 'month') {
    query = { createdAt: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)) } };
  } else if (filter === 'year') {
    query = { createdAt: { $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)) } };
  }

  try {
    const arts = await Art.find(query).skip(skip).limit(limit);
    const totalArts = await Art.countDocuments(query);

    res.status(200).json({ arts, hasMore: totalArts > skip + limit });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch arts' });
  }
};
