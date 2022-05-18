import '../components/Button/Button.scss';
import '../components/Socials/Socials.scss';
import '../styles/atom-one-light.css';
import Head from 'next/head';
import '../styles/app.scss';
import {useRouter} from "next/router";

import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
export default function App({ Component, pageProps }) {
   const router = useRouter();
   return (
      <>
         <Head>
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
               media="print"
               onload="this.media='all'"
            />
         </Head>
         <div className="app">
            <Navigation />
            <Component {...pageProps} />
            
            {/* added to remove footer from gallery */}
            {router.pathname !== '/gallery' && <Footer /> }
            {/* <Footer /> */}
         </div>
      </>
   );
}