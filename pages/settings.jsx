import { useState, useEffect, useRef, createRef } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { useCurrentUser } from '../lib/hooks'
import expList from '../lib/expertises.json'

const ProfileSection = () => {
  const [user, { mutate }] = useCurrentUser();
  const [isUpdating, setIsUpdating] = useState(false);
  const [msg, setMsg] = useState({ message: '', isError: false });
  const dummyImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-user'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E"

  const nameRef = useRef();
  const profilePictureRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const bioRef = useRef();
  const websiteRef = useRef();
  const portfolioRef = useRef();
  const twitterRef = useRef();
  const githubRef = useRef();
  const linkedinRef = useRef();
  const instagramRef = useRef();
  const behanceRef = useRef();
  const dribbbleRef = useRef();
  const mediumRef = useRef();

  const expertiseRefs = useRef([React.createRef()]); //TO-DO: fix this!
  const newArray = [];
  let newItem;
  const onCheckboxChange = (index) => {
    if (event.target.checked) {
      newItem = newArray.push(index)
      console.log(newArray)
    } else {
      newItem = newArray.indexOf(index)
      newArray.splice(newItem, 1)
      console.log(newArray)
    }
  }

  useEffect( () => {
    expertiseRefs.current.value = user.expertises || []; //TO-DO: fix this!
    usernameRef.current.value = user.username || '';
    nameRef.current.value = user.name;
    emailRef.current.value = user.email;
    locationRef.current.value = user.location || '';
    bioRef.current.value = user.bio || '';
    websiteRef.current.value = user.link_website || '';
    portfolioRef.current.value = user.link_portfolio || '';
    twitterRef.current.value = user.link_twitter || '';
    githubRef.current.value = user.link_github || '';
    linkedinRef.current.value = user.link_linkedin || '';
    instagramRef.current.value = user.link_instagram || '';
    behanceRef.current.value = user.link_behance || '';
    dribbbleRef.current.value = user.link_dribbble || '';
    mediumRef.current.value = user.link_medium || '';
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isUpdating) return;
    setIsUpdating(true);

    const formData = new FormData();
    if (profilePictureRef.current.files[0]) { formData.append('profilePicture', profilePictureRef.current.files[0]); }
    for (let i = 0; i < newArray.length; i++) {formData.append('expertises[]', newArray[i])};
    formData.append('name', nameRef.current.value);
    formData.append('location', locationRef.current.value);
    formData.append('bio', bioRef.current.value);
    formData.append('username', usernameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('link_website', websiteRef.current.value);
    formData.append('link_portfolio', portfolioRef.current.value);
    formData.append('link_twitter', twitterRef.current.value);
    formData.append('link_github', githubRef.current.value);
    formData.append('link_linkedin', linkedinRef.current.value);
    formData.append('link_instagram', instagramRef.current.value);
    formData.append('link_behance', behanceRef.current.value);
    formData.append('link_dribbble', dribbbleRef.current.value);
    formData.append('link_medium', mediumRef.current.value);

    const res = await fetch('/api/user', {
      method: 'PATCH',
      body: formData,
    });

    if (res.status === 200) {
      const userData = await res.json();
      mutate({
        user: {
          ...user,
          ...userData.user,
        },
      });
      setMsg({ message: 'Profile updated! :)' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  };

  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();
    const body = {
      oldPassword: e.currentTarget.oldPassword.value,
      newPassword: e.currentTarget.newPassword.value,
    };
    e.currentTarget.oldPassword.value = '';
    e.currentTarget.newPassword.value = '';

    const res = await fetch('/api/user/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'Password updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  };

  async function sendVerificationEmail() {
    await fetch('/api/user/email/verify', {
      method: 'POST',
    });
  }

  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <div className="container mx-auto px-24 py-16 md:px-8 md:py-48 sm:px-8 sm:py-48">
        <h2>Edit Profile</h2>
        
        <form onSubmit={handleSubmit}>
          {/* <div>
            {!user.emailVerified ? (
              <p>
                Your email has not been verified.&nbsp;
                <a role="button" onClick={sendVerificationEmail} className="text-blue font-semibold">
                  Send verification email
                </a>
              </p>
            ) : null}
          </div> */}

          <div className="pt-4">
            <label htmlFor="name" className="formlabel my-1">Name</label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder=""
              ref={nameRef}
              className="forminput capitalize"
            />
          </div>
          <div>
            <label htmlFor="avatar" className="formlabel my-1">Profile Image</label>
            <img src={user.profilePicture || dummyImage} width="150" height="150" alt={nameRef} />
            <input
              id="avatar"
              name="avatar"
              type="file"
              accept="image/png, image/jpeg"
              ref={profilePictureRef}
              className="py-4"
            />
          </div>
          <div>
            <label htmlFor="name" className="formlabel my-1">Location</label>
            <select
              required
              id="location"
              name="location"
              placeholder=""
              ref={locationRef}
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
            <label htmlFor="username" className="formlabel my-1">Username</label>
            <input
              required
              id="username"
              name="username"
              type="text"
              placeholder=""
              ref={usernameRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="email" className="formlabel my-1">Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder=""
              ref={emailRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="bio" className="formlabel my-1">Biography</label>
            <textarea
              id="bio"
              name="bio"
              type="text"
              placeholder="Keep it short and sweet (3 sentences or less)"
              maxLength="350"
              ref={bioRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="expertises" className="formlabel my-1">Expertise (up to 5)</label>
            <p><strong>Previously you selected:</strong> {user.expertises.toString()}</p>
            {expList.expertises.map( (index) => (
              <div key={index} className="inline-block">
                <label className="block pill text-s">
                  <input
                    id={index}
                    name={index}
                    type="checkbox"
                    value={index}
                    ref={ e => expertiseRefs.current[index] = e } //TO-DO: fix this!
                    onChange={() => onCheckboxChange(index)}
                  />
                  <span className="pill-label">{index}</span>
                </label>
              </div>
            ))
            }
          </div>
          <div className="pt-6 pb-4">
            <label htmlFor="website" className="formlabel my-1">Website URL</label>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="https://..."
              pattern="https?://.+"
              ref={websiteRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="portfolio" className="formlabel my-1">Portfolio URL</label>
            <input
              id="portfolio"
              name="portfolio"
              type="url"
              placeholder="https://..."
              pattern="https?://.+"
              ref={portfolioRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="twitter" className="formlabel my-1">Twitter</label>
            <input
              id="twitter"
              name="twitter"
              type="url"
              placeholder="https://twitter.com/..."
              pattern="https?://.+"
              ref={twitterRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="github" className="formlabel my-1">GitHub</label>
            <input
              id="github"
              name="github"
              type="url"
              placeholder="https://github.com/..."
              pattern="https?://.+"
              ref={githubRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="formlabel my-1">LinkedIn</label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/..."
              pattern="https?://.+"
              ref={linkedinRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="instagram" className="formlabel my-1">Instagram</label>
            <input
              id="instagram"
              name="instagram"
              type="url"
              placeholder="https://instagram.com/..."
              pattern="https?://.+"
              ref={instagramRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="behance" className="formlabel my-1">Behance</label>
            <input
              id="behance"
              name="behance"
              type="url"
              placeholder="https://behance.net/..."
              pattern="https?://.+"
              ref={behanceRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="dribbble" className="formlabel my-1">Dribbble</label>
            <input
              id="dribbble"
              name="dribbble"
              type="url"
              placeholder="https://dribbble.com/..."
              pattern="https?://.+"
              ref={dribbbleRef}
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="medium" className="formlabel my-1">Medium</label>
            <input
              id="medium"
              name="medium"
              type="url"
              placeholder="https://medium.com/..."
              pattern="https?://.+"
              ref={mediumRef}
              className="forminput"
            />
          </div>
          <div>
            <button disabled={isUpdating} type="submit" className="btn btn-solid font-semibold">Save &amp; Update</button>
            {msg.message ? <p style={{ color: msg.isError ? 'red' : '#0070f3'}}>{msg.message}</p> : null}
          </div>
        </form>

        <form onSubmit={handleSubmitPasswordChange} className="pt-8">
          <h3 className="pb-4">Security</h3>
          <div>
            <label htmlFor="oldpassword" className="formlabel my-1">Old Password</label>
            <input
              type="password"
              name="oldPassword"
              id="oldpassword"
              required
              className="forminput"
            />
          </div>
          <div>
            <label htmlFor="newpassword" className="formlabel my-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                id="newpassword"
                required
                className="forminput"
              />
          </div>
          <button type="submit" className="btn btn-solid font-semibold">Change Password</button>
        </form>
      </div>
    </>
  );
};

const SettingPage = () => {
  const [user] = useCurrentUser();

  if (!user) {
    return (
      <>
        <p>Please sign in</p>
      </>
    );
  }
  return (
    <Layout>
      <h1>Settings</h1>
      <ProfileSection />
    </Layout>
  );
};

export default SettingPage;
