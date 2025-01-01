import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts/Layout";
import ProductDetailPage from "./Components/cards/ProductDetails.jsx";
import ProductCard from "./Components/cards/ProductCard.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>

      </Router>
    );
  }
}

export default App;
