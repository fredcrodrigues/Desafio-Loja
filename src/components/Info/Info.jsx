import styles from "../../_assents/css/icons.module.css" 


export default function Info(){
    return(

        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.icon}>
                    <img src='icons/envio.svg' />
                </div>
                <div className={styles.text}>
                    <h3>Envio Rapido</h3>
                    <p>Rapidez e Qualidade</p>
                </div>
            </div>
            <div className={styles.banner}>
                <div className={styles.icon}> 
                    <img src='icons/suporte.svg'/>
                </div>
                <div  className={styles.text}>
                    <h3>24 horas</h3>
                    <p>Equipe sempre disponível</p>
                </div>
            </div>
           <div  className={styles.banner}>
                <div className={styles.icon}> 
                    <img src='icons/desconto.svg'/>
                </div>
                <div className={styles.text}>
                    <h3>20% de desconto</h3>
                    <p>Compras acima de R$ 50,00</p>
                </div>
           </div>
           <div  className={styles.banner}>
                <div className={styles.icon}> 
                    <img src='icons/compras.svg'/>
                </div>
                <div className={styles.text}>
                    <h3>Super Seguro!</h3>
                    <p>As compras são 100% seguras</p>
                </div>
           </div>
          
        </div>
    )
}