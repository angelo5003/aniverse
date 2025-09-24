import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// HttpLink sends GraphQL over HTTP using the global fetch.
// Next.js (Node 18+) provides fetch, so no extra install is needed.
// If you target older Node or a custom test env without fetch, add `cross-fetch`.
const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.ANILIST_URI || "/api/anilist" }),
  cache: new InMemoryCache(),
});

export default apolloClient;
