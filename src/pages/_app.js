import { CartProvider } from '../_config/context/Context'
import '../_assents/css/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <CartProvider>
        <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
