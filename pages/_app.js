import '../styles/globals.css'
import Layout from '../components/Layout'
import { CartContextWrap } from "./../components/context/CartContext"; 

function MyApp({ Component, pageProps }) {
  return (
    <CartContextWrap>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextWrap>
  )
}

export default MyApp
