import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Common from '../context/Common';
import '../styles/nprogress.css';
import Router from 'next/router';
import nprogress from 'nprogress/nprogress.js';

Router.events.on('routeChangeStart', nprogress.start);
Router.events.on('routeChangeError', nprogress.done);
Router.events.on('routeChangeComplete', nprogress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Common.provider>
      <Component {...pageProps} />
    </Common.provider>
  )
}

export default MyApp
