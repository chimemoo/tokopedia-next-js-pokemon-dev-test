import { GlobalStyles } from '../commons/styles/global';
import ContextProvider from '../commons/context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  );
}

export default MyApp;
