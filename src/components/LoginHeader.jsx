import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/LoginHeader.module.css';

const LoginHeader = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Arte di Anna</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={router.pathname === '/' ? styles.active : ''}>Home</Link>
        <Link href="/dashboard" className={router.pathname === '/dashboard' ? styles.active : ''}>Gallery</Link>
        <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>About</Link>
        <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
      </nav>
    </header>
  );
};

export default LoginHeader;
