import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class ButtonUi extends Component {
  render() {
    const { className, text, onClick } = this.props;

    return (
      <Button
        className={`${className} rounded-5 px-5 py-3 text-white fw-bolder mt-2`}
        onClick={onClick}
      >
        {text || "Shop Now"}
      </Button>
    );
  }
}

export default ButtonUi;
