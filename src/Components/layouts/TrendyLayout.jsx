import React, { Component } from "react";
import AutumnCollection from "../Trendy/AutumnCollection";
import TrendyClothing from "../Trendy/TrendyClothing";
import Icon from '../Trendy/Icon'
class TrendyLayout extends Component {
  render() {
    return (
      <>
        <AutumnCollection />
        <TrendyClothing />
       <Icon />
      </>
    );
  }
}
export default TrendyLayout;
