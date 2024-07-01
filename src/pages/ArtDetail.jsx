// src/pages/ArtDetail.jsx
import React from 'react';
import styles from '../styles/ArtDetail.module.css';
import { FaHeart, FaShareAlt, FaEye, FaComment } from 'react-icons/fa';

const ArtDetail = ({ art }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={art.imageUrl} alt={art.title} />
      </div>
      <div className={styles.detailsContainer}>
        <h1>{art.title}</h1>
        <p>{art.description}</p>
        <div className={styles.actions}>
          <button className={styles.iconButton}><FaHeart /> Like</button>
          <button className={styles.iconButton}><FaShareAlt /> Share</button>
          <span className={styles.views}><FaEye /> {art.viewers.length} views</span>
        </div>
        <div className={styles.comments}>
          <h2>Comments</h2>
          <textarea className={styles.commentInput} placeholder="Add a comment..."></textarea>
          <button className={styles.commentButton}><FaComment /> Post Comment</button>
        </div>
      </div>
    </div>
  );
};

export default ArtDetail;
