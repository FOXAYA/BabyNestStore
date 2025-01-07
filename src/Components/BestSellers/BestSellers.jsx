import React, { Component } from "react";
import ProductCard from "../cards/ProductCard";
// import { Container, Row, Col } from "react-bootstrap";

class BestSellers extends Component{
    render(){
        return(
            <>
           <div className="text-center">
           <h5>Our faves</h5>
           <h1>Best sellers</h1>
           </div>
           <ProductCard />
           </>
        );
    }
}

export default BestSellers