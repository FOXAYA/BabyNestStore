import React, { Component } from "react";
import NavbarLayout from "./NavbarLayout";
import Home from "../Pages/Home";
import Clients from "../layouts/Clients";
import Category from "../Pages/Category";
import BlogImage from "../Pages/BlogImage";
import Icon from "../Pages/Icon";
import BestSellers from "./BestSellers";
import Footer from "../Footer/Footer";
class Layout extends Component {
  render() {
    return (
      <>
        <NavbarLayout />
        <Home />
        <Clients />
        <Category />
        <BestSellers />
        <Icon />
        <BlogImage />
        <Footer />

      </>
    );
  }
}
export default Layout;
