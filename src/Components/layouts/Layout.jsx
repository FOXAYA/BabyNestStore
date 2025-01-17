import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Clients from "../Clients/Clients";
import HomeCatogories from "../HomeCategories/HomeCatogories";
import BestSellers from "./BestSellerLayout";
import TrendyLayout from "./TrendyLayout";
import BlogImage from "../Blog/BlogImage";
import Footer from "../Footer/Footer";
import AboutUs from "../Pages/AboutUs";

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Clients />
        <HomeCatogories />
        <BestSellers />
        <TrendyLayout/>
        <BlogImage />
        <Footer />

        <AboutUs />
      </>
    );
  }
}
export default Layout;
