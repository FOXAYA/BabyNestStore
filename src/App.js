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
import Payment from './Components/shop/Payment'; 
import CheckoutForm from "./Components/shop/CheckOut";
import { AuthProvider } from "./Components/Sign/AuthContext";
import SignUp from "./Components/Sign/SignUp";
import ForgotPassword from "./Components/Sign/Forget";

class App extends Component {
  render() {
    return (
      <BasketProvider>
        <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/products" element={<ProductCard />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/blog" element={<BlogImage />} />
            <Route path="/blog/:id" element={<BabyShop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUS />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> 
          </Routes>
        </Router>
        </AuthProvider>
      </BasketProvider>
    );
  }
}

export default App;
