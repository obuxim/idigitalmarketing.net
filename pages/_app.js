import { AuthProvider } from '../components/context/AuthContext/AuthState';
import { CartProvider } from '../components/context/CartContext/CartState';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}

export default MyApp
