import React from 'react';
import styles from '../styles/About.module.css';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.text}>We're working hard to bring you this page. Stay tuned!</p>
        <p className={styles.text}>In the meantime, please enjoy exploring our art gallery.</p>
        <div className={styles.maintenanceImage}>
          <img src="/images/maintainence.gif" alt="Maintenance" />
        </div>
      </div>
    </>
  );
};

export default About;
