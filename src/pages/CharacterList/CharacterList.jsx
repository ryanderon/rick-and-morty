import React from "react";
import OverlaySpinner from "../../components/OverlaySpinner/OverlaySpinner";
import Typo from "../../components/Typo/Typo";
import useCharacters from "../../hooks/useCharacters";
import Button from "../../components/Button/Button";
import CharacterCard from "./CharacterCard";
import { CharactersContainer } from "./CharacterListStyle";
import { color2 } from "../../__variables";

const CharacterList = () => {
  const { error, loading, data, fetchMore } = useCharacters();

  return (
    <CharactersContainer>
      {loading ? (
        <OverlaySpinner isVisible={loading} />
      ) : error ? (
        <Typo>Something went wrong</Typo>
      ) : (
        <>
          {data?.characters?.results?.map((v) => (
            <CharacterCard key={v?.id} data={v} />
          ))}
          {data?.characters?.info?.next && (
            <Button
              padding="16px 24px"
              bgColor={color2}
              onClick={() => {
                const { next } = data?.characters?.info;
                fetchMore({
                  variables: { page: next },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    fetchMoreResult.characters.results = [
                      ...prev.characters.results,
                      ...fetchMoreResult.characters.results,
                    ];
                    return fetchMoreResult;
                  },
                });
              }}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </CharactersContainer>
  );
};

export default CharacterList;
