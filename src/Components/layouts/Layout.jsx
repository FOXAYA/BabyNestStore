import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Clients from "../Clients/Clients";
import CategoriesListSec1 from "../HomeCategories/CategoriesListSec1";
import BestSellers from "../BestSellers/BestSellers";
import CategoriesListSec2 from "../HomeCategories/CategoriesListSec2";
import TrendyLayout from "../Trendy/TrendyLayout";
import BlogImage from "../Blog/BlogImage";
import Footer from "../Footer/Footer";
class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Clients />
        <CategoriesListSec1 />
        <BestSellers />
        <CategoriesListSec2 />
        <TrendyLayout />
        <BlogImage />
        <Footer />
      </>
    );
  }
}
export default Layout;
