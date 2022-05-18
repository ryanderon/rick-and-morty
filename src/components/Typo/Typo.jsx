import React from "react";
import PropTypes from "prop-types";
import { Typography } from "./TypoStyle";

const Typo = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

Typo.propTypes = {
  children: PropTypes.any,
};

export default Typo;
