import type { AppProps } from 'next/app';

import { Montserrat } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-main`}>
      <Component {...pageProps} />
    </main>
  );
}
