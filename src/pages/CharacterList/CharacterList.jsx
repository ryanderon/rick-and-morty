import React from "react";
import OverlaySpinner from "../../components/OverlaySpinner/OverlaySpinner";
import Typo from "../../components/Typo/Typo";
import useCharacters from "../../hooks/useCharacters";
import Button from "../../components/Button/Button";
import CharacterCard from "./CharacterCard";
import { CharactersContainer } from "./CharacterListStyle";
import { color2 } from "../../__variables";

const CharacterList = () => {
  const { error, loading, characters, info, refetch } = useCharacters();

  return (
    <CharactersContainer>
      {loading ? (
        <OverlaySpinner isVisible={loading} />
      ) : error ? (
        <Typo>Something went wrong</Typo>
      ) : (
        <>
          {characters?.map((v) => (
            <CharacterCard key={v?.id} data={v} />
          ))}
          {info?.next && (
            <Button
              padding="16px 24px"
              bgColor={color2}
              onClick={() => refetch({ page: info?.next })}
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
