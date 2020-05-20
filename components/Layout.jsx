import Head from "next/head";
import Link from "next/link";
import GoogleAnalytics from "./GoogleAnalytics";
import Feedback from "./Feedback";

export default ({ children }) => (
  <div>
    <Head>
      <title>Malaysians Who Make</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content="Malaysians Who Make" />
      <meta property="og:type" content="website" />
      <meta name="description" content={`MalaysiansWhoMake is the 
        place to discover talented makers, from artists, designers, 
        writers to developers.`}/>
      <meta property="og:url" content="https://malaysianswhomake.com"/>
      <meta property="og:image" content="https://ibb.co/8NGF5zR" /> 
      <meta name="author" content="Rachel How"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700" rel="stylesheet"/>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="canonical" href="https://malaysianswhomake.com"/>
      <GoogleAnalytics />
    </Head>

    <nav className="fixed z-10 flex-row header px-12 py-6 md:inline-block sm:inline-block sm:py-4">
        <div className="w-1/3 sm:w-full">
            {/* nothing here  */}
        </div>

        <div className="w-1/3 align-middle text-center md:w-full sm:w-full sm:flex sm:justify-center">
            <a href="/" className="font-bold text-24 md:text-l">
              Malaysians Who Make
            </a>
        </div>

        <div className="w-1/3 align-middle flex justify-end md:w-full md:justify-center 
        md:pt-4 sm:w-full sm:justify-center sm:pt-6">
          <Link href="/about"><a className="btn font-semibold md:text-s">
            About
          </a></Link>
          <a target="_blank" href="https://forms.gle/tGzbZJaden9ZCSZe7" 
          className="btn btn-solid font-semibold md:text-s">
            Submit My Info
          </a>
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
  </div>
);
