// src/pages/login.jsx
import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoginHeader from '../components/LoginHeader';
import styles from '../styles/Login.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success('Logged in successfully');
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    }
  };

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    return () => {
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
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default Login;
