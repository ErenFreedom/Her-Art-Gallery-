// src/pages/art/[id].jsx
import React from 'react';
import { useRouter } from 'next/router';
import ArtDetail from '../../pages/ArtDetail';
import { generatePlaceholderArts } from '../../placeholderArts';

const ArtDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const arts = generatePlaceholderArts(100); // Generate a large enough array
  const art = arts.find((art) => art._id === id);

  if (!art) {
    return <div>Art not found</div>;
  }

  return <ArtDetail art={art} />;
};

export default ArtDetailPage;
