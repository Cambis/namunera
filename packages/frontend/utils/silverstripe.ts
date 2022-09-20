import { GraphQLClient } from 'graphql-request';

import { getSdk } from '@/graphql';

export const sdk = () => {
  let endpoint = 'http://backend/graphql';
  const client = new GraphQLClient(endpoint);
  return getSdk(client);
};
