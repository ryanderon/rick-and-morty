import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        next
        prev
        pages
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;

const useCharacters = (page = 1) => {
  const { error, loading, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    },
  });

  return {
    error,
    loading,
    data,
    fetchMore,
  };
};

export default useCharacters;
