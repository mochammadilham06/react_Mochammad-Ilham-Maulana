import { ApolloClient, InMemoryCache } from "@apollo/client";
import CONST from "../utils/constant";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: CONST.BASE_URL,
  headers: {
    "x-hasura-admin-secret": CONST.BASE_KEY,
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://graphql-basic-06.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": CONST.BASE_KEY,
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
