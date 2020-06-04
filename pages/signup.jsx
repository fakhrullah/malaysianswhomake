import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Router from 'next/router'
import { useCurrentUser } from '../lib/hooks'
import expList from '../lib/expertises.json'

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
      // TO-DO: profilePicture
      name: e.currentTarget.name.value,
      location: e.currentTarget.location.value,
      bio: e.currentTarget.bio.value,
      expertises: e.currentTarget.expertises.value,
      username: e.currentTarget.username.value,
      email: e.currentTarget.email.value,
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
        <h2>Let's get started</h2>
        <form onSubmit={handleSubmit} className="pt-8 pb-8">
          <div>
            <label htmlFor="name" className="formlabel text-s my-1">What's your name?</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your real name"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="name" className="formlabel text-s my-1">Where are you from?</label>
            <select
              required
              id="location"
              name="location"
              type="location"
              placeholder=""
              className="forminput"
            >
              <option value="Klang Valley">Kuala Lumpur / Selangor</option>
              <option value="Penang">Penang</option>
              <option value="Malacca">Malacca</option>
              <option value="Johor">Johor</option>
              <option value="Kelantan">Kelantan</option>
              <option value="Negeri Sembilan">Negeri Sembilan</option>
              <option value="Pahang">Pahang</option>
              <option value="Perak">Perak</option>
              <option value="Perlis">Perlis</option>
              <option value="Sabah">Sabah</option>
              <option value="Sarawak">Sarawak</option>
              <option value="Terengganu">Terengganu</option>
              <option value="Kedah">Kedah</option>
            </select>
          </div>
          <div>
            <label htmlFor="bio" className="formlabel text-s my-1">Biography</label>
            <textarea
              id="bio"
              name="bio"
              type="text"
              placeholder="Keep it short and sweet (3 sentences or less)"
              maxLength="350"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="expertises" className="formlabel text-s my-1">Expertise (up to 5)</label>
            {expList.expertises.map( (index) => (
              <div key={index} className="inline-block">
                <label className="block pill text-s">
                  <input
                    id={index}
                    name={index}
                    type="checkbox"
                    value={index}
                  />
                  <span className="pill-label">{index}</span>
                </label>
              </div>
            ))
            }
          </div>
          <div className="pt-8">
            <label htmlFor="username" className="formlabel text-s my-1">Pick a username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="email" className="formlabel text-s my-1">Your email (We hate spam, too)</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="password" className="formlabel text-s my-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              className="forminput"
            />
          </div>
          <div className="pt-4">
            <button type="submit" className="btn btn-solid font-semibold">Continue</button>
            {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignupPage;
