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
        <title>Forgot password</title>
      </Head>
      <div className="container mx-auto px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
        <h2>Forgot your password?</h2>
        <form onSubmit={handleSubmit} className="pt-4 pb-8">
          <p>We will send a password reset link to your email address below.</p>
          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="forminput my-4"
            />
          </div>
          <button type="submit" className="btn btn-solid font-semibold">Submit</button><br/><br/>
          <a href="/login">← Back to Login</a>
        </form>
      </div>
    </Layout>
  );
};

export default ForgetPasswordPage;
