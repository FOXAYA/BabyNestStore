import React, { Component } from 'react'
import CategoriesList from "../Pages/CategoriesList"
import Trendy from './Trendy';
 class Category extends Component {
  render() {
    return (
<>
<CategoriesList />
<Trendy />
</>
    )
  }
}
export default Category;