import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'
import { useEffect } from 'react'
import AOS from 'aos'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Head>
      <meta charSet="utf-8" />
        <base href="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimal-ui"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="LucasSites (lucassites.com.br)" />
        <meta name="copyright" content="Doe Sangue" />
        <meta name="designer" content="LucasSites (lucassites.com.br)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta property="og:title" content="Doe Sangue" />
        <meta
          property="og:description"
          content="Um simples ato pode salvar vidas."
        />
        <meta property="og:url" content="https://doesangue.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="/logo.png" />
        <meta property="twitter:image" content="/logo.png" />
        <meta property="twitter:card" content="summary" />
        <meta name="keywords" content="" />
        <meta
          name="abstract"
          content="Um simples ato pode salvar vidas."
        />
        <meta
          name="description"
          content="Um simples ato pode salvar vidas."
        />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp