import Head from 'next/head'
import styles from '../styles/main.module.css'
import Cards from "../components/cardImage/Cards"
import Nav  from '../components/navBar/Nav'

export default function Home() {

  
 
  return (
    <>
    
    <div className={styles.header}>
      <Head>
          <title>Loja de compras</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        
      </Nav>

    </div>
    <div className={styles.container}>

      <main className={styles.main}>

        <Cards></Cards>
      
      </main>

    </div>
    <div>
        <footer className={styles.footer}>
          
        </footer>
    </div>
  
    </>
  )
}
