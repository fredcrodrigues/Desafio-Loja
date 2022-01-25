import {FiHeart,FiShoppingCart, FiUser} from "react-icons/fi"
import { useContext } from "react"
import { Cartcontext } from "../../context/Context"
import styles from "../../styles/nav.module.css"
import router from "next/router"




export default function Nav(){

    const {cart} = useContext(Cartcontext)

    return(
        <div className={styles.nav_container}>
                <ul>
                    <li>
                        <FiHeart size={22}/>
                    </li>
                    
                    <li> <a onClick ={ () => router.push('cart-products')}>
     
                        <FiShoppingCart size={22}/>
                                    {cart.length != 0 ?  <span>{cart.length}</span> : null }
                        </a>             
                    </li>   

                    <li>
                        <FiUser size={22}/>
                    </li>
        
                </ul>
        </div>

    )
}