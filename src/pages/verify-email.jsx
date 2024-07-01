import Link from 'next/link';
import styles from '../styles/VerifyEmail.module.css';

const VerifyEmail = () => {
  return (
    <div className={styles.container}>
      <h1>Verify Your Email</h1>
      <p>Thank you for registering! Please check your email for a verification link.</p>
      <p>If you didn't receive the email, please check your spam folder or <Link href="/resend-verification">resend the verification email</Link>.</p>
    </div>
  );
};

export default VerifyEmail;
