import React, { Component } from "react";
import AutumnCollection from "../Trendy/AutumnCollection";
import Trendy from "../Trendy/Trendy";
class TrendyLayout extends Component {
  render() {
    return (
      <>
        <AutumnCollection />
        <Trendy />
        
      </>
    );
  }
}
export default TrendyLayout;
