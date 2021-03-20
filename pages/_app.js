import '../styles/globals.css'
import Layout from '../components/Layout'
import { CartProvider, CartContext } from '../components/context/CartContext/CartState';

function MyApp({ Component, pageProps }) {
  return (
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
  )
}

export default MyApp
