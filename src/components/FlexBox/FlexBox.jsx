import React from "react";
import PropTypes from "prop-types";
import { Flex } from "./FlexBoxStyle";

const FlexBox = ({ children, ...props }) => {
  return <Flex {...props}>{children}</Flex>;
};

FlexBox.propTypes = {
  children: PropTypes.any,
};
export default FlexBox;
