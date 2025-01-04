import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts/Layout";
import ProductDetailPage from "./Components/cards/ProductDetails.jsx";
import ProductCard from "./Components/cards/ProductCard.jsx";
import BlogImage from "./Components/Pages/BlogImage.jsx";
import BabyShop from "./Components/roots/BabyShop.jsx";

class App extends Component {
  render() {
    return (
      
      <Router>
        
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<ProductCard />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          <Route path="/blog" element={<BlogImage />} />
          <Route path="/blog/:id" element={<BabyShop />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

        

     