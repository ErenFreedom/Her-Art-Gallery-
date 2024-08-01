import React from 'react';
import styles from '../styles/ArtDetail.module.css';
import { FaHeart, FaShareAlt, FaEye, FaComment } from 'react-icons/fa';

const ArtDetail = ({ art }) => {
  if (!art) {
    return (
      <div className={styles.container}>
        <h1>Art Detail</h1>
        <p>No art details available.</p>
      </div>
    );
  }

  const { imageUrl, title, description, viewers = [] } = art;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {imageUrl ? <img src={imageUrl} alt={title} /> : <p>No image available</p>}
      </div>
      <div className={styles.detailsContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.actions}>
          <button className={styles.iconButton}><FaHeart /> Like</button>
          <button className={styles.iconButton}><FaShareAlt /> Share</button>
          <span className={styles.views}><FaEye /> {viewers.length} views</span>
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
