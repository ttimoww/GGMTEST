import '../styles/globals.css'
import Layout from './../components/Layout/Layout.js';

function NextApp({ Component, pageProps }){
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    )
}

export default NextApp
