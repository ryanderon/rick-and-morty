import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import { ModalContainer, Overlay } from "./OverlaySpinnerStyle";

const OverlaySpinner = ({ isVisible }) => {
  return (
    <Overlay isVisible={isVisible}>
      <ModalContainer>
        <Spinner />
      </ModalContainer>
    </Overlay>
  );
};

OverlaySpinner.propTypes = {
  isVisible: PropTypes.bool,
};
export default OverlaySpinner;
