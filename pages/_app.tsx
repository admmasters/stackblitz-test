import '@fortawesome/fontawesome-svg-core/styles.css';

import { GlobalStyles } from '@zopauk/react-components';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
