import { ApolloClient, InMemoryCache } from "@apollo/client";
import CONST from "../utils/constant";

const client = new ApolloClient({
  uri: CONST.BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": CONST.BASE_KEY,
  },
});

export default client;
