import Head from "next/head";
import Link from "next/link";

export default ({ children }) => (
  <div>
    <Head>
      <title>Malaysians Who Make</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700" rel="stylesheet"/>
    </Head>

    <nav className="fixed z-10 flex-row header px-20 py-6 sm:inline-block sm:py-4">
        <div className="w-1/3 align-middle sm:w-full sm:text-center text-xxl md:text-xl">
            {/* nothing here  */}
        </div>

        <div className="w-1/3 align-middle sm:w-full sm:text-center">
          <h1 className="title text-l md:text-base">
            <a href="/">Malaysians Who Make</a>
          </h1>
        </div>

        <div className="w-1/3 align-middle flex justify-end sm:w-full sm:justify-center sm:pt-6">
          <a href="/" className="btn font-semibold md:text-s">
            ABOUT
          </a>
          <a href="https://forms.gle/BLgLLaiG7U8vir2XA" className="btn btn-solid font-semibold md:text-s">
            NOMINATE
          </a>
        </div>
    </nav>

    {children}

    <footer>
      <div className="grid grid-cols-3 px-12 py-8 md:px-10  sm:block sm:px-2">
        <div className="cols-span-1 text-s text-left md:text-xs sm:text-base sm:pb-2 sm:text-center">
            © 2020 MalaysiansWhoMake
        </div>
        
        <div className="cols-span-1 text-s text-center md:text-xs md:invisible sm:text-base sm:pb-2 sm:text-center">
            An open source initiative by 
            <a href="https://twitter.com/rachelhxw"
            className="font-semibold"> Rachel How</a>
        </div>

        <div className="cols-span-1 text-s text-right md:text-xs sm:text-base sm:pb-2 sm:text-center">
            Made in 🇲🇾 with ❤️ 
        </div>
      </div>
    </footer>
  </div>
);
