import 'bootstrap/scss/bootstrap.scss'
import '../styles/app.scss'
import { IsChangeDataProvider } from '../contexts/isGetData'

function MyApp ({ Component, pageProps }) {
  return (
    <IsChangeDataProvider>
      <Component {...pageProps} />
    </IsChangeDataProvider>
  )
}

export default MyApp
