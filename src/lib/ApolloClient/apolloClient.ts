// Client-side Apollo setup that will call our Next.js proxy by default
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// HttpLink sends GraphQL over HTTP using the global fetch.
// Next.js provides fetch; if your test env lacks it, add `cross-fetch`.
const apolloClient = new ApolloClient({
  // Use server env var if present, otherwise default to our server route
  link: new HttpLink({ uri: process.env.ANILIST_URI || "/api/anilist" }),
  cache: new InMemoryCache(),
});

export default apolloClient;
