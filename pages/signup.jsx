import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Router from 'next/router';
import { useCurrentUser } from '../lib/hooks';

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  return (
    <Layout>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="container mx-auto px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit} className="pt-4 pb-8">
          <div>
            <label htmlFor="name"></label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="username"></label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              className="forminput"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-solid font-semibold">Sign up</button>
            {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignupPage;
