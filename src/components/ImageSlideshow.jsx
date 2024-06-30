// src/components/ImageSlideshow.jsx

import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from '../styles/ImageSlideshow.module.css';

const images = [
  {
    original: '/images/image10.png',
    description: "Discover the finest creations of contemporary art."
  },
  {
    original: '/images/image11.png',
    description: "Immerse yourself in the vibrant world of colors and creativity."
  },
  {
    original: '/images/image12.png',
    description: "Experience the beauty of art that speaks to the soul."
  },
  {
    original: '/images/image13.png',
    description: "Unveil the artistic expressions that captivate the heart."
  },
  {
    original: '/images/image14.png',
    description: "Celebrate the passion and talent of emerging artists."
  },
];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slideshowContainer}>
      <ImageGallery 
        items={images.map(image => ({ ...image, description: '' }))} // Remove descriptions from images
        showThumbnails={false} 
        autoPlay={true} 
        slideInterval={3000} 
        showFullscreenButton={false} 
        showPlayButton={false} 
        onSlide={onSlide}
        showNav={false}
      />
      <p className={styles.slideshowText}>{images[currentIndex].description}</p>
    </div>
  );
};

export default ImageSlideshow;
