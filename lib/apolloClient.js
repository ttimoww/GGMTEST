import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://live-shop.goedgemerkt.nl/graphql/',
    cache: new InMemoryCache()
  });

  export default client;