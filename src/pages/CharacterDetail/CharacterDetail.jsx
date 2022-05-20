import React from "react";
import { useParams } from "react-router";
import Typo from "../../components/Typo/Typo";
import useCharacter from "../../hooks/useCharacter";

const CharacterDetail = () => {
  const { id } = useParams();
  const { error, loading } = useCharacter(id);

  if (error) return <Typo>Something went wrong....</Typo>;
  if (loading) return <Typo>Spinner</Typo>;

  return <div>character detail</div>;
};

export default CharacterDetail;
