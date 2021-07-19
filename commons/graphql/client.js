import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.ENDPOINT,
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'https://graphql-pokeapi.vercel.app/api/graphql', fetch }),
});

export default client;
