import { useContext, useState } from "react"
import { Cartcontext } from "../../_config/context/Context"
import {FiTrash2} from "react-icons/fi"
import styles from "../../_assents/css/table.module.css"

export default function Table(){


    const{cart, removeProduct, removeAll} = useContext(Cartcontext)
    
    // ajusta Array 
    const newCart= cart.filter((prod,i) => {return  i == cart.indexOf(prod)})
    //Obtem quantidade de produtos para alterar 
    const arrayProduct = newCart.map(prod => {return (prod.quantify)})
    // alterar quantidade de produto
    const [quantify, setQtd] = useState(arrayProduct)
    
   
    return(
      
      <div>
          {newCart != 0 ?  
            <>
            <table className={styles.table_cart}> 
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Remove</th>


                            </tr>
                        </thead>
                        <tbody>
                            { newCart.map( (prod,i ) =>
                                                
                                                <tr key={i}>
                                                    <td>image</td>
                                                    <td><span>{prod.name}</span></td>
                                                    <td>{prod.price}</td>
                                                    <td><input type="number" value={quantify[i]} onChange={e => setQtd(e.target.value)} /></td>
                                                    <td><button onClick={ () => removeProduct(prod)} ><span><FiTrash2 size={16}/></span></button></td>
                                                </tr> 
                                              
                                    )}
                        </tbody>

                </table> 
                
                <div className={styles.button_all}>
                    <div className={styles.removeall}>
                        <button onClick={() => removeAll()}><span>Apagar Tudo</span></button>
                    </div>
                    <div className={styles.buttonBuy}>
                        <button onClick={() => alert("test")}><span>Finalizar Compra</span></button>
                    </div>
                  
                </div>
             </>
            : 
                <div>
                    <h1>Carrinho vazio</h1>
                </div>
            }
  

      </div>
    )
}