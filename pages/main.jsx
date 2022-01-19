import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cards from "../components/Cards"

export default function Home() {

  
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja de compras</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Bem vindo a Loja
        </h1>

        <Cards/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
