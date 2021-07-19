import { ApolloProvider } from '@apollo/client';
import { GlobalStyles } from '../commons/styles/global';
import ContextProvider from '../commons/context';
import Layout from '../components/commons/Layout';
import client from '../commons/graphql/client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
