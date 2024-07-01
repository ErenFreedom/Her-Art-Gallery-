// src/pages/signup.jsx

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';
import SignupHeader from '../components/SignupHeader';
import styles from '../styles/Signup.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageSlideshow from '../components/ImageSlideshow';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', twitterHandle: '' });
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add(styles.signupBody);
    return () => {
      document.body.classList.remove(styles.signupBody);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      toast.success('Registered successfully');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <SignupHeader />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1>Sign Up to Arte di Anna</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password (8-12 characters)"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="twitterHandle"
              placeholder="Enter your Twitter handle (optional)"
              value={formData.twitterHandle}
              onChange={handleChange}
            />
            <button type="submit">Create Account</button>
          </form>
          <div className={styles.divider}>or</div>
          <button onClick={() => signIn('google')} className={styles.googleButton}>
            <FcGoogle size={20} className={styles.googleIcon} />
            Continue with Google
          </button>
          <p className={styles.signInText}>
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <ImageSlideshow />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default Signup;
