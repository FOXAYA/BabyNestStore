import React, { Component } from 'react'
import NavbarLayout from './NavbarLayout';
import Home from "../Pages/Home"
class Layout extends Component {
  render() {
    return (
      <>
      <NavbarLayout />
      <Home />

      </>
    )
  }
}
export default Layout;