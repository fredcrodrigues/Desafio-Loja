import Nav from "../../components/Nav/Nav"
import Table from "../../components/Table/Table"
import styles from '../../_assents/css/main.module.css'
import {FiPackage} from "react-icons/fi"

export default function cart(){



    return(
        <>
        <div className={styles.header}>
            <Nav/>     
        </div>
      
        <div className={styles.container}>
           <main className={styles.main}>
                <Table/>
           </main>
        </div>

        <div>
            <footer className={styles.footer}>
                <FiPackage/><span>Story</span>
            </footer>
        </div>

        </>
    )
}