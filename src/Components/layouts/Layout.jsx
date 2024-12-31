import React, { Component } from 'react'
import NavbarLayout from './NavbarLayout';
import Home from "../Pages/Home"
import Clients from '../layouts/Clients';
import Category from '../Pages/Category';
import ProductCard from '../cards/ProductCard';
import Footer2 from '../Footer/Footer2';
class Layout extends Component {
  render() {
    return (
      <>
      <NavbarLayout />
      <Home />
      <Clients />
          <Category />
          <ProductCard />
          <Footer2 />
      
      </>
    )
  }
}
export default Layout;