import Layout from 'components/theme/layout'
import '../styles/globals.css'
import '../styles/style.sass'
function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />

    </Layout>
  )
}

export default MyApp
