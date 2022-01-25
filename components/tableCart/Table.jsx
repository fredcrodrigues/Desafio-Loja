import { useContext, useState } from "react"
import { Cartcontext } from "../../context/Context"
import styles from "../../styles/table.module.css"

export default function Table(){


    const{cart, removeProduct, removeAll} = useContext(Cartcontext)
    
    // ajusta Array 
    const newCart= cart.filter((prod,i) => {return  i == cart.indexOf(prod)})
    //Obtem quantidade de produtos para alterar 
    const arrayProduct = newCart.map(prod => {return (prod.quantify)})
    // para alterar quantidade de produto
    const [quantify, setQtd] = useState(arrayProduct)
    
   
    return(
      
      <div>
          {newCart != 0 ?  
            <>
            <table className={styles.table_cart}> 
                        <tbody>
                            { newCart.map( (prod,i ) =>
                                                
                                                <tr key={i}>
                                                    <td>{prod.name}</td>
                                                    <td>{prod.price}</td>
                                                    <td>{prod.quantify}</td>
                                                    <td><input type="number" value={quantify[i]} onChange={e => setQtd(e.target.value)} /></td>
                                                    <td><button onClick={ () => removeProduct(prod)} >remove</button></td>
                                                </tr> 
                                              
                                    )}
                        </tbody>

                </table> 

                <div>
                    <button onClick={() => removeAll()}>Remover Tudo</button>
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