import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>art</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
