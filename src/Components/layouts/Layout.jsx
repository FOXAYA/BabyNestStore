import React, { Component } from 'react'
import NavbarLayout from './NavbarLayout';
import Home from "../Pages/Home"
import Clients from '../layouts/Clients';
import Category from '../Pages/Category';
class Layout extends Component {
  render() {
    return (
      <>
      <NavbarLayout />
      <Home />
      <Clients />
      <Category />
      </>
    )
  }
}
export default Layout;