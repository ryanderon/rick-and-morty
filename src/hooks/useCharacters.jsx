import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";

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
  const { error, loading, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    },
  });
  const [arrCharacters, setArrCharacters] = useState([]);

  useEffect(() => {
    data && setArrCharacters([...arrCharacters, ...data?.characters?.results]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    error,
    loading,
    characters: arrCharacters,
    info: data?.characters?.info,
    refetch,
  };
};

export default useCharacters;
