import Head from 'next/head';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import Error from 'next/error';
import middleware from '../../../middlewares/middleware';
import { useCurrentUser } from '../../../lib/hooks';
import { getUser } from '../../../lib/db';

export default function UserPage({ user }) {
  if (!user) return <Error statusCode={404} />;
  const {
    name, bio, profilePicture, location,
  } = user || {};
  const [currentUser] = useCurrentUser();
  const isCurrentUser = currentUser?._id === user._id;
  return (
    <Layout>
      <style jsx>
        {`
          img {
            width: 10rem;
            height: auto;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.05) 0 10px 20px 1px;
            margin-right: 1.5rem;
            background-color: #f3f3f3;
          }
        `}
      </style>

      <Head>
        <title>{name}</title>
      </Head>
      
      <div className="container mx-auto px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
        <div>
            <img src={profilePicture} width="256" height="256" alt={name} />
            <h2>{name}</h2>
            {isCurrentUser && (
            <Link href="/settings">
              <button type="button" className="btn btn-solid font-semibold md:text-s">Edit profile</button>
            </Link>
            )}
          </div>
          Bio:
          <p>{bio}</p>
          Location:
          <p>{location}</p>
        </div>
        <div>
          <h3>Something here</h3>
        </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await middleware.apply(context.req, context.res);
  const user = await getUser(context.req, context.params.userId);
  if (!user) context.res.statusCode = 404;
  return {
    props: {
      user,
    }, // will be passed to the page component as props
  };
}
