import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const TOKEN = process.env.DATO_CMS_TOKEN;
const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${TOKEN}`,
  },
}));

const CMSGraphQLClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default CMSGraphQLClient;
