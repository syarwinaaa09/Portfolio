import './globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps: {session, ...pageProps} }: any) {
  return (
      <div>
      <Component {...pageProps} />
      </div>    
  )
}


 export default MyApp
