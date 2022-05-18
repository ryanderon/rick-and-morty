import React from "react";
import { Link } from "react-router-dom";
import Typo from "../../components/Typo/Typo";
import useCharacters from "../../hooks/useCharacters";
import { CharactersContainer } from "./CharacterListStyle";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <Typo>Spinner...</Typo>;

  if (error) return <Typo>Something went wrong</Typo>;

  return (
    <CharactersContainer>
      {data?.characters?.results?.map((v) => (
        <Link key={v?.id} to={`/${v?.id}`}>
          <div>
            <img src={v?.image} alt="" />
            <Typo>{v?.name}</Typo>
          </div>
        </Link>
      ))}
    </CharactersContainer>
  );
};

export default CharacterList;
