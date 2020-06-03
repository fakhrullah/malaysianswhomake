import Head from "next/head";
import Link from "next/link";
import { useCurrentUser } from '../lib/hooks';
import GoogleAnalytics from "./GoogleAnalytics";
import Feedback from "./Feedback";

export default ({ children }) => {
  
  const [ user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  }
  
  return (
    <>
      <Head>
        <title>Malaysians Who Make</title>
        <meta charSet="utf-8" />
        <meta name="title" content="Malaysians Who Make"/>
        <meta name="description" content="Malaysians Who Make is the place to discover talented makers, from artists, designers, writers to developers."/>
        <meta name="author" content="Rachel How"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Malaysians Who Make" />
        <meta property="og:type" content="website" />
        <meta name="og:description" content="Malaysians Who Make is the place to discover talented makers, from artists, designers, writers to developers."/>
        <meta property="og:url" content="https://malaysianswhomake.com"/>
        <meta property="og:image" content="https://i.ibb.co/47QNFCs/URL-image-preview.png" /> 
        <meta property="twitter:image" content="https://i.ibb.co/47QNFCs/URL-image-preview.png" /> 
        
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700" rel="stylesheet"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="canonical" href="https://malaysianswhomake.com"/>
        <GoogleAnalytics />
      </Head>

      <nav className="fixed flex-row header px-12 py-4 md:inline-block sm:inline-block sm:py-4">
          <div className="w-1/3 sm:w-full">
            <Link href="/"><a className="font-bold text-l md:text-l">
              🇲🇾 Malaysians Who Make
            </a></Link>
          </div>

          <div className="w-1/3 align-middle text-center md:w-full sm:w-full sm:flex sm:justify-center">
              {/* nothing here  */}
          </div>

          <div className="w-1/3 align-middle flex justify-end md:w-full md:justify-center 
          md:pt-4 sm:w-full sm:justify-center sm:pt-6">
            {!user ? (
              <>
                <Link href="/about"><a className="btn font-semibold md:text-s">
                  About
                </a></Link>
                <Link href="/login"><a className="btn font-semibold md:text-s">
                  Login
                </a></Link>
                <Link href="/signup"><a className="btn btn-solid font-semibold md:text-s">
                  Submit My Info
                </a></Link>
              </>
            ) : (
              <>
                <Link href="/about"><a className="btn font-semibold md:text-s">
                  About
                </a></Link>
                <Link href="/user/[userId]" as={`/user/${user._id}`}><a className="btn font-semibold md:text-s">
                  Profile
                </a></Link>
                <a tabIndex={0} role="button" onClick={handleLogout} href="/" className="btn font-semibold md:text-s">
                  Logout
                </a>
              </>
            )}
          </div>
      </nav>

      <Feedback/>

      {children}

      <footer>
        <div className="grid grid-cols-3 px-12 py-4 md:px-10 sm:block sm:px-2">
          <div className="cols-span-1 invisible">
              {/* nothing here  */}
          </div>

          <div className="cols-span-1 text-s text-center md:text-xs sm:text-base sm:pb-2">
              © 2020 MalaysiansWhoMake&nbsp; | &nbsp;<a href="https://twitter.com/malaysiansmake" className="font-semibold">Twitter</a>
          </div>

          <div className="cols-span-1 text-s text-right md:text-xs sm:text-base sm:pb-2 sm:text-center">
              Made in 🇲🇾 with ❤️ 
          </div>
        </div>
      </footer>
    </>
  );
};
