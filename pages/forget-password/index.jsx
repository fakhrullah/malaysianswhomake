import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout'
import Router from 'next/router';

const ForgetPasswordPage = () => {
  async function handleSubmit(e) {
    e.preventDefault(e);

    const body = {
      email: e.currentTarget.email.value,
    };

    const res = await fetch('/api/user/password/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) Router.replace('/');
  }

  return (
    <Layout>
      <Head>
        <title>Forget password</title>
      </Head>
      <div className="container mx-auto px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
        <h2>Forget password</h2>
        <form onSubmit={handleSubmit}>
          <p>Do not worry. Simply enter your email address below.</p>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgetPasswordPage;
