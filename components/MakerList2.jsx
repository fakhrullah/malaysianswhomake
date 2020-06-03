
import Link from 'next/link';
import useSWR, { useSWRPages } from 'swr';
import fetcher from '../lib/fetch';

const dummyPicture = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-user'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E"

export default function MakerList() {
  const { data, error } = useSWR(`/api/makerlist`, fetcher)
  if (error) return <p>Failed to load</p>
  if (!data) return <p>Loading</p>

  return (
    <>
      <section>
        {data.users.map(user => (
          <div key={user._id}>
            <Link href="/user/[userId]" as={`/user/${user._id}`}>
              <a style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img width="27" height="27" 
                      style={{ borderRadius: '50%', objectFit: 'cover', marginRight: '0.3rem' }} 
                      src={user.profilePicture || dummyPicture} alt={user.name} />
                <b>{user.name}</b>
              </a>
            </Link><br/>
            {user.location}<br/>
            {user.bio}
          </div>
        ))}
      </section>

      <style jsx>
        {`
          div {
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 1.5rem;
            margin-bottom: 0.5rem;
            transition: box-shadow 0.2s ease 0s;
          }
          div:hover {
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          }
          small {
            color: #777;
          }
        `}
      </style>
    </>
  );
}