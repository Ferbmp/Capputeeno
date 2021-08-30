import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
   uri: "https://rocketseat-frontend-challenge.herokuapp.com/",
   ssrMode: typeof window === "undefined",
   cache: new InMemoryCache(),
});
