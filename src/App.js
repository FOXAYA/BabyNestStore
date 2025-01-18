import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts/Layout";
import ProductDetailPage from "./Components/shop/ProductDetails";
import ProductCard from "./Components/shop/ProductCard";
import BlogImage from "./Components/Blog/BlogImage";
import BabyShop from "./Components/Blog/BabyShop";
import Contact from "./Components/contact/Contact";
import AboutUS from './Components/Pages/AboutUs'
import { BasketProvider } from "./Components/shop/BasketContext";

import Shop from "./Components/shop/Shop";
class App extends Component {
  render() {
    return (
      <BasketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/products" element={<ProductCard />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/blog" element={<BlogImage />} />
            <Route path="/blog/:id" element={<BabyShop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUS/>} />
            <Route path="/shop" element={<Shop />} />

          </Routes>
        </Router>
      </BasketProvider>
    );
  }
}

export default App;
