import '@/styles/globals.css';

import Navigation from '@/components/Navigation';
import Header from '@/components/Header';

import { Josefin_Sans } from 'next/font/google';
import Head from 'next/head';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;

  return (
    <>
      <Head>
        <title>The Wild Router</title>
        <link rel='icon' href='logo.png' />
      </Head>

      <div
        className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />

        <div className='grid flex-1 px-8 py-12'>
          <main className='mx-auto w-full max-w-7xl'>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </>
  );
}
