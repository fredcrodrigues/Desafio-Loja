import styles from  "../../_assents/css/categories.module.css"
import {FaCaretLeft, FaCaretRight} from "react-icons/fa"
import {useRef} from "react"



export default function Categories(){
        

        const categorie = useRef(null)
        const clickRight = (e) =>{
               
                e.preventDefault()
                categorie.current.scrollLeft -=  categorie.current.offsetWidth

        }

        const clickLeft= (e) =>{
                e.preventDefault()
                categorie.current.scrollLeft +=  categorie.current.offsetWidth
        }
                
                
        
        return(
        <>
       
        <div className={styles.container}>
                <div className={styles.carrousel} ref={categorie}>
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
                <div className={styles.buttoms}>
                        <button onClick={clickRight}><FaCaretLeft size={16} /></button>
                        <button onClick={clickLeft}><FaCaretRight size={16} /></button>
                </div>
        </div>
       
        </>
    )
}