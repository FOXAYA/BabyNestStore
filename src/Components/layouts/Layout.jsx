import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Clients from "../Clients/Clients";
import CategoriesListSec1 from "../HomeCategories/CategoriesListSec1";
import BestSellers from "../BestSellers/BestSeller";
import ProductCard  from "../cards/ProductCard";
import CategoriesListSec2 from "../HomeCategories/CategoriesListSec2";
import TrendyLayout from "../Trendy/TrendyLayout";
import BlogImage from "../Blog/BlogImage";
import Footer from "../Footer/Footer";
import  Autumncoll from '../Trendy/AutumnCollection'

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Clients />
        <CategoriesListSec1 />
        <ProductCard />
        <CategoriesListSec2 />
        <BestSellers />
        <Autumncoll />

        <TrendyLayout />
        <BlogImage />
        <Footer />
      </>
    );
  }
}
export default Layout;