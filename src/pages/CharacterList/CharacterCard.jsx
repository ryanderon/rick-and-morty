import React from "react";
import PropTypes from "prop-types";
import Img from "../../components/Image/Img";
import Typo from "../../components/Typo/Typo";
import { CardLink } from "./CharacterListStyle";
import FlexBox from "../../components/FlexBox/FlexBox";
import { color1, color3, color4 } from "../../__variables";
import Button from "../../components/Button/Button";
import UseIsMobile from "../../hooks/useIsMobile";
import { wordEllipsis } from "../../__styleHelper";

const CharacterCard = ({ data }) => {
  const isMobile = UseIsMobile();

  return (
    <CardLink
      height={isMobile ? "30vh" : "300px"}
      width={isMobile ? "150px" : "200px"}
    >
      <Img
        src={data?.image}
        radius="16px 16px 0 0"
        height={isMobile ? "45%" : "60%"}
      />
      <FlexBox padding="16px" direction="column">
        <Typo color={color1} style={wordEllipsis(1)}>
          {data?.name}
        </Typo>
        <Typo color={data?.status === "Alive" ? color4 : color3}>
          {data?.status}
        </Typo>
      </FlexBox>
      <Button
        margin="auto 0 0 0"
        radius="0 0 16px 16px"
        onClick={() => (window.location.href = `/${data?.id}`)}
      >
        See Details
      </Button>
    </CardLink>
  );
};

CharacterCard.propTypes = {
  data: PropTypes.object,
};
export default CharacterCard;
