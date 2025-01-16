import React from "react";
import ContactUs from "../contact/ContactUs";
import { Container, Row, Col } from "react-bootstrap";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar"
import img1 from "../assets/images/about-image1.jpg"




const AboutUs = () => {
    return (
        <>
        <Navbar />
        <AboutHeader />
            <Container className="my-5">
                <Row className="mt-6">
                    <Col md={6} className="d-flex justify-content-center">
                    <img
                        src={img1}
                        alt="Child"
                        className="img-fluid rounded"
                        style={{ width: "100%", maxWidth: "600px", height: "600px", borderRadius: "10px" }}
                    />
                    </Col>

                    <Col
                    md={6}
                    className="d-flex justify-content-center"
                    style={{ background: "#F8F4EC", borderRadius: "10px" }}
                    >
                    </Col>
                </Row>
            </Container>
        
        <ContactUs />
        
        
        </>

    );
};


export default AboutUs;