import Head from "next/head";
import Link from "next/link";

export default ({ children }) => (
  <div>
    <Head>
      <title>Malaysians Who Make</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <nav className="fixed z-10 flex-row header py-1 px-12 sm:inline-block sm:py-4">
        <div className="w-1/5 align-middle sm:w-full sm:text-center text-xxl md:text-xl">
          <a href="/">🇲🇾</a>
        </div>

        <div className="w-3/5 align-middle sm:w-full sm:text-center">
          <h1 className="title text-l md:text-base">
            <a href="/">Malaysians Who Make</a>
          </h1>
        </div>

        <div className="w-1/5 align-middle flex justify-end sm:w-full sm:justify-center sm:pt-6">
          <a href="/" className="btn md:text-s">
            About
          </a>
          <a href="/" className="btn btn-white ml-4 md:text-s">
            Nominate
          </a>
        </div>
    </nav>

    {children}

    <footer>
      <div className="grid grid-cols-3 px-12 pt-10 pb-6 md:px-10 md:pb-2 sm:block sm:px-2">
        <div className="cols-span-1 text-s text-left md:text-xs sm:text-base sm:text-center">
            © 2020 MalaysiansWhoMake
        </div>
        <div className="cols-span-1 text-s text-center md:text-xs md:invisible sm:text-base sm:text-center">
            An open source initiative by 
            <a href="https://twitter.com/rachelhxw"
            className="font-semibold"> Rachel How</a>
        </div>
        <div className="cols-span-1 text-s text-right md:text-xs sm:text-base sm:text-center">
            Made with ❤️ in 🇲🇾
        </div>
      </div>
    </footer>
  </div>
);
