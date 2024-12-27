import React, { Component } from "react";
import NavbarLayout from "./NavbarLayout";
import Home from "../Pages/Home";
import BlogImage from "../Pages/BlogImage";
class Layout extends Component {
  render() {
    return (
      <>
        <NavbarLayout />
        <Home />
        <BlogImage />
      </>
    );
  }
}
export default Layout;
