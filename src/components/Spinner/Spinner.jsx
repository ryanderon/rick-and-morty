import React from "react";
import { Loader } from "./SpinnerStyle";

const Spinner = ({ ...props }) => {
  return <Loader {...props} />;
};

export default Spinner;
