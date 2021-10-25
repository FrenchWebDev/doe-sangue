import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header/Header'
import { Heart } from '../components/Heart/Heart'
import { Informations } from '../components/Informations/Informations'
import { Footer } from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Início | #PARTIUDOARSANGUE
        </title>
      </Head>
      <Header />
      <main>
        <Heart />
        <Informations />
      </main>
      <Footer />
    </div>
  )
}

export default Home
