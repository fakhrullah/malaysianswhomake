import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Error from 'next/error';
import middleware from '../../middlewares/middleware';
import { useCurrentUser } from '../../lib/hooks';
import { getUser } from '../../lib/db';
import Ic_Location from '../../src/Ic_Location'

export default function UserPage({ user }) {
  if (!user) return <Error statusCode={404} />;
  const {
    name, bio, profilePicture, location, expertises
  } = user || {};
  const [currentUser] = useCurrentUser();
  const isCurrentUser = currentUser?._id === user._id;
  return (
    <Layout>

      <Head>
        <title>{name}</title>
      </Head>
      
      <div className="container mx-auto px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
        <div className="text-center">
          <div className="flex justify-center"><img src={profilePicture} width="256" height="256" alt={name} /></div>
          <div className="py-4">
            <h2>{name}</h2>
            <Ic_Location/> {location}<br/><br/>
            Expertise: {expertises.toString()}<br/> <br/>
            Bio: {bio} <br/> <br/>
          </div>
        {isCurrentUser && (
          <Link href="/settings">
            <button type="button" className="btn btn-solid font-semibold md:text-s">Edit profile</button>
          </Link>
        )}
        </div>
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
    },
  };
}
