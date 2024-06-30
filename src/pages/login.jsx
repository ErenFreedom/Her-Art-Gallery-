import { useState, useEffect } from 'react';
import LoginHeader from '../components/LoginHeader'; // Import the LoginHeader component
import styles from '../styles/Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  useEffect(() => {
    // Add global styles for body and html
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    return () => {
      // Cleanup the styles when the component is unmounted
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
    };
  }, []);

  return (
    <>
      <LoginHeader />
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <div className={styles.background}></div>
          <div className={styles.formContainer}>
            <h1>Login to Arte di Anna</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Enter your username/email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
            </form>
            <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
            <a href="/signup" className={styles.signUp}>Don't have an account? Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
