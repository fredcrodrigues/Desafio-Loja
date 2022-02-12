import Head from 'next/head'
import styles from '../_assents/css/main.module.css'
import {Banner , Cards, Info, Nav,  Categories } from '../helpers/index'
export default function Home() {

  
 
  return (
    <>
    
    <div className={styles.header}>
      <Head>
          <title>Loja de compras</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Barrade Navegação*/}

      <Nav/>
    </div>

    <div className={styles.container}>

      <main className={styles.main}>
        {/* Banner Principal*/}
            <Banner></Banner>

        {/* Informações da Pagina*/}
            <Info></Info>
        
        {/*Categorias*/}
           <Categories></Categories> 
        {/* Lista de produtos*/}
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
