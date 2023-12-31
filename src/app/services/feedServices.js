import { ApolloClient, InMemoryCache, gql, ApolloQueryResult, useQuery } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        name
        image
        location {
          name
          type
          dimension
        }
        origin {
          name
          type
          dimension
        }
        episode {
          name
        }
      }
    }
  }
`;

export const updateQueryChars = (prevResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) return prevResult;
  const results = [
    ...prevResult.characters.results,
    ...fetchMoreResult.characters.results,
  ];
  return {
    characters: {
      __typename: 'Characters',
      results,
    },
  };
}
