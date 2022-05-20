import React from "react";
import PropTypes from "prop-types";
import { Btn } from "./ButtonStyle";

const Button = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
