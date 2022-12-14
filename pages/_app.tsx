import '@/_core/styles/global.css'
import '@/_core/styles/colors.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
