import React, { Component } from "react";

class Maintitles extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <>
        <div className="text-center mt-6 maintitles">
          <span>{subtitle}</span>
          <h1>{title}</h1>
        </div>
      </>
    );
  }
}

export default Maintitles;
