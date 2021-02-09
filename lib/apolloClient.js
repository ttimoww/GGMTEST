import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';

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

const httpLink = new HttpLink({ uri: 'https://live-shop.goedgemerkt.nl/graphql/' });


const storeViewMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Store: 'ggm_nl',
    }
  });

  return forward(operation);
})


const client = new ApolloClient({
    link: concat(storeViewMiddleware, httpLink),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  });

  export default client;