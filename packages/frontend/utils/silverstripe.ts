import { GraphQLClient } from "graphql-request";

import { getSdk } from "@/graphql";

export const sdk = () => {
  const endpoint = Deno.env.get("SS_GRAPHQL_ENDPOINT") ||
    "http://backend/graphql";
  const client = new GraphQLClient(endpoint);
  return getSdk(client);
};
