import React, { Component } from "react";
import BsCards from '../BestSellers/BsCards';
import BsCatogeries  from "../BestSellers/BsCatogeries";
import BsProduct from "../BestSellers/BsProduct";

class BestSellers extends Component {
  render() {
    return (
      <>
      <BsCards />
      <BsCatogeries  />
      <BsProduct />
      </>
    );
  }
}

export default BestSellers;
