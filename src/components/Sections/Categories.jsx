import styles from  "../../_assents/css/categories.module.css"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa"
import {useEffect, useRef, useState} from "react"



export default function Categories(){
        

        const categorie = useRef(null)


       // const [offLeft, setoffLeft] = useState(null)

       
        const clickRight = (e) =>{
                e.preventDefault()
                console.log(categorie.current.lastChild)
                categorie.current.prepend(categorie.current.lastChild)
        }

        const clickLeft= (e) =>{
                e.preventDefault()   
                console.log(categorie.current.firstChild)
                categorie.current.appendChild(categorie.current.firstChild)
        }
               
        return(
        <>
       
        <div className={styles.container}>
                <div className={styles.carrousel} ref={categorie} >
                        <div className={styles.categorie} >
                                <div className={styles.image}>
                                        <img src="/images/categories/casa.png" alt="" />
                                </div>
                                <div className={styles.text}>
                                        <h4>Casa</h4>
                                </div>
                        </div>

                        <div className={styles.categorie} id="2">
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

                <div className={styles.buttons}>
                        <button  onClick={clickRight}>< FaAngleLeft size={30} /></button>
                        <button   onClick={clickLeft}>< FaAngleRight size={30} /></button>
                </div>
        </div>
       
        </>
    )
}