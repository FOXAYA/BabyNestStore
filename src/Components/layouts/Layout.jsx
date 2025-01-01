import React, { Component } from 'react'
import NavbarLayout from './NavbarLayout';
import Home from "../Pages/Home"
import Clients from '../layouts/Clients';
import Category from '../Pages/Category';
import ProductCard from '../cards/ProductCard';
import BlogImage from '../Pages/BlogImage';
import Icon from '../Pages/Icon';
class Layout extends Component {
  render() {
    return (
      <>
      <NavbarLayout />
      <Home />
      <Clients />
          <Category />
        <ProductCard />
        <Icon />
        <BlogImage />
      
      </>
    )
  }
}
export default Layout;