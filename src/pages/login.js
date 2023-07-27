/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from '@/styles/Login.module.css';
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined />
          <GithubOutlined />
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
