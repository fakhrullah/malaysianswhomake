import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../lib/hooks';

const LoginPage = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useCurrentUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push('/');
  }, [user]);

  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container mx-auto px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
        <h2>Login</h2>
        <form onSubmit={onSubmit} className="pt-4 pb-8">
          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="forminput"
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="btn btn-solid font-semibold">Sign in</button>
            <Link href="/forget-password">
              <a className="font-semibold">Forget password?</a>
            </Link>
          </div>
          {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
