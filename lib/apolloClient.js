import { ApolloClient, InMemoryCache } from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
    uri: 'https://stage.goedgemerkt.nl/graphql/',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  });

  export default client;