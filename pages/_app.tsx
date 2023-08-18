import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import {Toaster} from 'react-hot-toast'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return(
     <div className={inter.className}>
      <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId='621021601569-okml78fbms7rc3p8flmjih11gdnkn36h.apps.googleusercontent.com'>
         <Component {...pageProps} />
         <Toaster/>
        <ReactQueryDevtools/>
      </GoogleOAuthProvider>
      </QueryClientProvider>
      
     </div> 
  )
}
