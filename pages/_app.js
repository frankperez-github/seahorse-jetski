import '../styles/Desk.css'
import '../styles/Phone.css'
import 'swiper/swiper-bundle.css'
import Layout from '../components/DeskVersion/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
