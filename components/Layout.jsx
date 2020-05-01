import Head from 'next/head'
import Link from 'next/link'

export default ({ children, title = 'Malaysians Who Make' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
        <nav className="navbar pt-5 pl-12 pr-12">
        <div className="w-1/5 h-18 align-middle">
            <Link href="/">
            <a className="text-xxl no-underline">🇲🇾</a>
            </Link> 
        </div>
        <div className="w-3/5 h-18 align-middle">
            <h1 className="title">
            <Link href="/"><a>Malaysians Who Make</a></Link>
            </h1>
        </div>
        <div className="w-1/5 h-18 align-middle">
            <a href="/" className="btn no-underline">About</a>
            <a href="/" className="btn btn-white ml-4 no-underline">Nominate</a>
        </div>
        </nav>
    </header>

    {children}

    <footer></footer>
  </div>
)