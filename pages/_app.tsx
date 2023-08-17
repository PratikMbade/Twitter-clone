import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import {Toaster} from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return(
     <div className={inter.className}>
      <GoogleOAuthProvider clientId='621021601569-okml78fbms7rc3p8flmjih11gdnkn36h.apps.googleusercontent.com'>
      <Toaster  position="top-left"
             reverseOrder={false}/>
         <Component {...pageProps} />
      
      </GoogleOAuthProvider>
     </div> 
  )
}
