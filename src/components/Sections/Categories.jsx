import styles from  "../../_assents/css/categories.module.css"

export default function Categories(){
    return(
        <div className={styles.container}>
            <div className={styles.categorie}>
                <div className={styles.image}>
                        <img src="/images/categories/casa.png" alt="" />
                </div>
                <div className={styles.text}>
                        <h4>Casa</h4>
                </div>
            </div>

            <div className={styles.categorie}>
                <div className={styles.image}>
                        <img src="/images/categories/sapatos.png" alt="" />
                </div>
                <div className={styles.text}>
                        <h4>Sapatos </h4>
                </div>
            </div>

            <div className={styles.categorie}>
                <div className={styles.image}>
                        <img src="/images/categories/esporte.png" alt="" />
                </div>
                <div className={styles.text}>
                        <h4>Esporte</h4>
                </div>
            </div>

            <div className={styles.categorie}>
                <div className={styles.image}>
                        <img src="/images/categories/camisas.png" alt="" />
                </div>
                <div className={styles.text}>
                        <h4>Roupas</h4>
                </div>
            </div>

            <div className={styles.categorie}>
                <div className={styles.image}>
                        <img src="/images/categories/teclado.png" alt="" />
                </div>
                <div className={styles.text}>
                        <h4>Eletronicos</h4>
                </div>
            </div>
        </div>
        
    )
}