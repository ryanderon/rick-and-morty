import React from "react";
import PropTypes from "prop-types";
import { Image } from "./ImgStyle";

const Img = ({ src, ...props }) => {
  return <Image src={src} {...props} />;
};

Img.propTypes = {
  src: PropTypes.string,
};

export default Img;
