import styles from '../../_assents/css/banner.module.css'

export default function Banner(){

    return(
        <div className={styles.container}>
                    <div className={styles.shape}>
                        <div className={styles.shape_1}></div>
                        <div className={styles.shape_2}></div>
                        <div className={styles.shape_3}></div>
                        <div className={styles.shape_4}></div>
                        <div className={styles.shape_5}></div>
                    </div>

                    <div className={styles.title}>
                        <h2>Crie o Seu Carrinho de </h2> 
                        <h1>Compras Aqui</h1>
                        <a href="">Comprar</a>
                    </div>

                    <div className={styles.image}>
                        <img src="/images/Cliente.png" alt="" />
                    </div>
        </div>
    )
}