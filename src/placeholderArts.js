// src/placeholderArts.js
export const generatePlaceholderArts = (count) => {
  const placeholderArts = [];

  for (let i = 1; i <= count; i++) {
    placeholderArts.push({
      _id: `placeholder-${i}`,
      title: `Art ${i}`,
      description: `Description for Art ${i}`,
      imageUrl: `https://via.placeholder.com/300?text=Art+${i}`,
      nsfw: false,
      author: `Author ${i}`,
      viewers: [],
    });
  }

  return placeholderArts;
};
