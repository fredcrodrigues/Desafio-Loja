import { useState, useContext ,useEffect } from "react/"
import {FaShippingFast, FaShoppingBag} from 'react-icons/fa'
import { Cartcontext } from "../../context/Context"
import {asnyc} from "../../services/data-service"
import styles from "../../styles/cards.module.css"




export default function Lista(){


    const [data, setData] = useState([])
    const {cart ,insertProduct } = useContext(Cartcontext)


    // Obter dados da API
    useEffect(() => {
      asnyc.getAll().then(resp => setData(resp.data))
      
    }, [])  
    return(
      
        <div>

            {/* Lista as informações*/}
            <ul className={styles.container_card}>
                {data.map(product => 
                    <li key={product.id}>
                        <img src="img/fone.jpg" alt="" className={styles.image}/>
                            <div className={styles.card_text_price_container}>

                                <div className={styles.card_text_price}>
                                    <p>R$<span>{product.price}</span></p>
                                </div>

                                <div className={styles.card_text_button}>
                                    <button onClick={() => insertProduct(product)}><span><FaShoppingBag size={22}/></span></button>
                                </div>
                                <div className={styles.card_text_name_product}>
                                    <h3>{product.name}</h3>
                                    <p><span><FaShippingFast size={20}/></span>Frete Grátis</p>
                                </div>
                                
                            </div>
                    </li>
                )}
            </ul>
        </div>
    )
   
}