// pages/verify-success.jsx
import Link from 'next/link';
import styles from '../styles/VerifyEmail.module.css';

const VerificationSuccess = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Email Verified</h1>
      <p className={styles.paragraph}>Your email has been verified successfully! You can now <Link href="/login">login</Link>.</p>
    </div>
  );
};

export default VerificationSuccess;
