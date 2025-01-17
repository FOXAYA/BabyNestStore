import React, { Component } from "react";
import AutumnCollection from "../Trendy/AutumnCollection";
import TrendySection from "../Trendy/TrendySection";
class TrendyLayout extends Component {
  render() {
    return (
      <>
        <AutumnCollection />
        <TrendySection />
      </>
    );
  }
}
export default TrendyLayout;
