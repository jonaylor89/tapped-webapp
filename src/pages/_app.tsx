import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import { Manrope, Inter, Outfit, Nunito_Sans } from 'next/font/google'

const manrope = Manrope({
  weight: '800',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
})

const outfit = Outfit({
  subsets: ['latin'],
})

const nunito = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>{`
        h1, h2, h3 {
          font-family: ${manrope.style.fontFamily};
          font-weight: ${manrope.style.fontWeight};
        }

        p {
          font-family: ${nunito.style.fontFamily}
        }

    .button-container {
      display: flex;
      align-items: center;
      padding: 10px;
      gap: 10px;
      cursor: pointer;

      border: 2px solid var(--primary-color);
      border-radius: 10px;
    }

  .buttons-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

.button-container-dark {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.button-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${outfit.style.fontFamily};
}

.button-store-name {
  font-size: 20px;
  font-weight: bold;
}

.button-title {
  font-size: 12px;
}

      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
