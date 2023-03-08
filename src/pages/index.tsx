import Head from 'next/head'
import Nav from '@/components/Nav'
import Testimonials from '@/components/testimonials'
import Landing from '@/components/landing'
import Affiliate from '@/components/affiliate'
import Events from '@/components/events'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tapped</title>
        <meta name="description" content="Know who you're working with" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4a4a4a"></meta>
      </Head>
      <Nav />
      <main>
        <Landing />
        <Testimonials />
        <Affiliate />
      </main>
      <Footer />
    </>
  )
}
