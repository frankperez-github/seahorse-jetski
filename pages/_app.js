import '../styles/Desk.css'
import Layout from '../components/DeskVersion/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
