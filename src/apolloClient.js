import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/', // Example public GraphQL API
  }),
  cache: new InMemoryCache(),
});

export default client;

