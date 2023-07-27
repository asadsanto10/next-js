/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from '@/styles/Login.module.css';
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { signIn } from 'next-auth/react';
import Head from 'next/head';

const LoginPage = () => {
  const handelGithubLogin = () => {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  };
  const handelGoogleLogin = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={handelGoogleLogin} />
          <GithubOutlined onClick={handelGithubLogin} />
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
