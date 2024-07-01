// src/components/Header.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import styles from '../styles/Header.module.css';

const Header = ({ hideAuthLinks, showSlider }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">Arte di Anna</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={router.pathname === '/dashboard' ? styles.active : ''}>Gallery</Link>
          <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>About</Link>
          <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
        </nav>
        {!isLoggedIn ? (
          <div className={styles.authLinks}>
            <Link href="/login" className={styles.button27}>Login</Link>
            <Link href="/signup" className={styles.button27}>Signup</Link>
          </div>
        ) : (
          <button onClick={() => signOut()} className={styles.button27}>Logout</button>
        )}
      </header>
      {showSlider && (
        <div className={styles.slider}>
          {/* Add your slider content here */}
        </div>
      )}
    </>
  );
};

export default Header;
