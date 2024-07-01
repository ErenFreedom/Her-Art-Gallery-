// src/components/ArtCard.jsx
import React from 'react';
import styles from '../styles/ArtCard.module.css';
import { FaHeart, FaShareAlt, FaEye } from 'react-icons/fa';

const ArtCard = ({ art, index, onClick }) => {
  const heights = [300, 350, 400, 450, 500];
  const height = heights[index % heights.length];

  return (
    <div className={styles.artCard} style={{ height: `${height}px` }} onClick={onClick}>
      <div className={styles.artImage}>
        <img src={art.imageUrl} alt={art.title} />
      </div>
      <div className={styles.artInfo}>
        <h3>{art.title}</h3>
        <div className={styles.artActions}>
          <button className={styles.iconButton}><FaHeart /> Like</button>
          <button className={styles.iconButton}><FaShareAlt /> Share</button>
          <span className={styles.views}><FaEye /> {art.viewers.length} views</span>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
