import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import { Manrope, Inter } from 'next/font/google'

const manrope = Manrope({
  weight: '800',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>{`
        h1, h2, h3 {
          font-family: ${manrope.style.fontFamily};
        }

        p {
          font-family: ${inter.style.fontFamily}
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
