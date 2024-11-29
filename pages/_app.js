import '../styles/globals.css';
import CustomScrollbar from '../components/scrollBar';

function MyApp({ Component, pageProps }) {
  return <CustomScrollbar><Component {...pageProps} /></CustomScrollbar>;
}

export default MyApp;