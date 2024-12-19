import React, { Component } from "react";
import NavbarLayout from "./NavbarLayout";
import Home from "../Pages/Home";
import Catogries from "../Pages/Catogeries";
class Layout extends Component {
  render() {
    return (
      <>
        <NavbarLayout />
        <Home />
        <Catogries />
      </>
    );
  }
}
export default Layout;
