import React, { Component } from "react";

import Clients from "../Layout/Clients";

import CategoriesList from "../Layout/CatogriesCards";

class Catogries extends Component {
  render() {
    return (
      <>
      <Clients />
      <CategoriesList />
      </>
    );
  }
}

export default Catogries;
