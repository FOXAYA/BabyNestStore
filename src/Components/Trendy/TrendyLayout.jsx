import React, { Component } from "react";
import Trendy from "./Trendy";
// import AutumnCollection from "./AutumnCollection";
import Icon from "./Icon";

class TrendyLayout extends Component {
  render() {
    return (
      <>
        {/* <AutumnCollection /> */}
        <Trendy />
        <Icon />
      </>
    );
  }
}
export default TrendyLayout;
