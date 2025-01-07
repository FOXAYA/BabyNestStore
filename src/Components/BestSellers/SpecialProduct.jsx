//import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { MdOutlineShoppingCartCheckout } from "react-icons/md";
//import products from "./ProductsList";
import product from "../../image/insta-image3.jpg";

const Newcard = () => {

    return (
        <Container className="my-5">
            <Row>
                <Col md={6} className="d-flex justify-content-center">
                    <img
                        src={product} // رابط صورة الطفل
                        alt="Child"
                        className="img-fluid rounded"
                        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
                    />
                </Col>

                <Col md={6} className="d-flex justify-content-center" style={{background: "#F8F4EC", borderRadius: "10px"}}>



                </Col>

            </Row>
    </Container>
    );
};

    export default Newcard;