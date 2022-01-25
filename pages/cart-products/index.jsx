import { useContext } from "react"
import { Cartcontext } from "../../context/Context"
import Nav from "../../components/navBar/Nav"
import Table from "../../components/tableCart/Table"
import styles from '../../styles/main.module.css'

export default function cart(){



    return(
        <>
        <div className={styles.header}>
            <Nav>     
            </Nav>

        </div>
      
        <div className={styles.container}>
           <main className={styles.main}>
                <Table>

                </Table>

           </main>
          
                

        </div>

        </>
    )
}