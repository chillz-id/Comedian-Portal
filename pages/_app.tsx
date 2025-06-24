import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stand Up Sydney - Comedian Portal</title>
        <meta name="description" content="Comedy booking platform for Stand Up Sydney comedians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Stand Up Sydney - Comedian Portal" />
        <meta property="og:description" content="Apply for comedy shows and manage your bookings" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
