import Head from 'next/head'
import Landing from '@/components/landing'
import Footer from '@/components/footer'
import FloatingActionButton from '@/components/fab'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tapped</title>
        <meta
          name="description"
          content="Join the leading networking platform for the entertainment industry. Our startup connects artists with promoters and allows you to network with professionals in the industry. Whether you're a musician, actor, or any other entertainment professional, we help you connect and collaborate with the right people to take your career to the next level. Sign up now and join the revolution!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://tapped.ai" />
        <meta name="twitter:title" content="Tapped" />
        <meta
          name="twitter:description"
          content="Join the leading networking platform for the entertainment industry. Our startup connects artists with promoters and allows you to network with professionals in the industry. Whether you're a musician, actor, or any other entertainment professional, we help you connect and collaborate with the right people to take your career to the next level. Sign up now and join the revolution!"
        />
        <meta name="twitter:creator" content="@tappednetwork" />
        <meta name="twitter:image:src" content="https://tapped.ai/og.png" />

        <meta property="og:title" content="Tapped" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tapped.ai/" />
        <meta property="og:image" content="https://tapped.ai/og.png" />
        <meta
          property="og:description"
          content="Join the leading networking platform for the entertainment industry. Our startup connects artists with promoters and allows you to network with professionals in the industry. Whether you're a musician, actor, or any other entertainment professional, we help you connect and collaborate with the right people to take your career to the next level. Sign up now and join the revolution!"
        />
        <meta property="og:site_name" content="Tapped" />

        <link rel="canonical" href="https://tapped.ai" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4a4a4a"></meta>
      </Head>
      {/* <Nav /> */}
      <main>
        <FloatingActionButton />
        <Landing />
      </main>
      <Footer />
    </>
  )
}
