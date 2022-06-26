import '../styles/globals.css'
import Topbar from '../components/navbar';
import type { AppProps } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.css'
import 'tailwindcss/tailwind.css';
import { LayoutTest } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
      <LayoutTest>
         <Component {...pageProps} />
      </LayoutTest>
  );
}

export default MyApp


{/* <Layout>
      <Topbar >
        <Component {...pageProps} />
    </Topbar>
   </Layout> */}