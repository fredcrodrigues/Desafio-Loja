import { useState,  useEffect } from "react/"
import {asnyc} from "../services/data-service"
import {FaPlus} from 'react-icons/fa'
import styles from "../styles/cards.module.css"



export default function Lista(){


    const [product, setProduct] = useState([])
    
    // Obter dados da API
    useEffect(() => {
      asnyc.getAll().then(resp => setProduct(resp.data))
      
    }, [])  

  
    return(
      
        <div>

            {/* Lista as informações*/}
            <ul className={styles.container_card}>
                {product.map(prod => 
              
                    <li>
                        <a href="">
                            <img src="img/produto.png" alt="" className={styles.image}/>
        
                                <div className={styles.card_text_price_container}>

                                    <div className={styles.card_text_price}>
                                        <p>R$<span>{prod.price}</span></p>
                                    </div>

                                    <div className={styles.card_text_button}>
                                        <button><FaPlus size={16}/></button>
                                    </div>
                                    <div>
                                        <h3>{prod.name}</h3>
                                        <p>Frete Grátis</p>
                                    </div>
                                    
                                    
                                </div>
                                                   
                        </a>

                    </li>
                )}
            </ul>
        </div>
    )
   
}