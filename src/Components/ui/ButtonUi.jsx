import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const ButtonUi = ({ className, text, onClick, size, variant }) => (
  <Button
    className={`${className}  mt-2`}
    onClick={onClick}
    size={size}
    variant={variant} 
      >
    {text}
  </Button>
);

ButtonUi.defaultProps = {
  text: "Shop Now",
  size: "lg",
  variant: "primary",
};

ButtonUi.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
};

export default ButtonUi;
