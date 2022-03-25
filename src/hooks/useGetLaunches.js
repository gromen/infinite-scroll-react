import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const graphQlClient = new GraphQLClient('https://api.spacex.land/graphql');

export function useGetLaunches(offset = 30) {
  const [launches, getLaunches] = useState(0);

  useEffect(() => {
    getLaunches(oldValue => oldValue + offset);
  }, [launches]);

  return useQuery('get-launches', async() => graphQlClient.request(gql`
      query GetLaunches($offset: Int) {
        launchesPast(limit: 30, offset: $offset) {
          mission_name
          id
        }
      }
    `));
}
