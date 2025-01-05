import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts/Layout";
import ProductDetailPage from "./Components/cards/ProductDetails";
import ProductCard from "./Components/cards/ProductCard";
import BlogImage from "./Components/Pages/BlogImage";
import BabyShop from "./Components/roots/BabyShop";
import Contact from "./Components/contact/Contact";
import { BasketProvider } from "./Components/cards/BasketContext";

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
            
          </Routes>
        </Router>
      </BasketProvider>
    );
  }
}

export default App;
     