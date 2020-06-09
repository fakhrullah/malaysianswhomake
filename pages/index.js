import Layout from "../components/Layout"
import Link from 'next/link'
import useSWR from 'swr';
import fetcher from '../lib/fetch';
import MakerList from "../components/MakerList"

function Home() {

  const { data, error } = useSWR(`/api/makerlist`, fetcher)
  if (error) return <p>Failed to load</p>
  if (!data) return <p>Loading</p>
  const allUsers = data.users

  return (
    <Layout>
        <div className="container mx-auto px-24 pt-16 md:px-8 md:pt-36 sm:px-8 sm:pt-40">
          
          <div className="w-full text-center py-16 my-10 border-2">
            Discover talented, passionate Malaysians who always strive to create and build stuff.<br/>
            Be a part of this now.<br/><br/>
            <Link href="/signup"><a className="btn btn-solid font-semibold md:text-s">Submit My Info</a></Link>
          </div>

          <MakerList allUsers={allUsers} />

        </div>
    </Layout>
  );
}

export default Home;