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
                        <div>
                            <h5 style={{ color: "#2c2c55", fontWeight: "bold", marginBottom: "15px"}}>Toys and clothing</h5>
                            <h1 style={{ color: "#2c2c54", fontWeight: "bold", marginBottom: "30px", lineHeight: "1.4" }}>
                                Your children deserve the best
                            </h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis.</p>
                            <p>Sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam. Sed ut perspiciatis unde omnis iste.</p>

                        </div>
                    </Col>
                </Row>
            </Container>

            <div>
                <img src={img1} className="d-block w-100" alt="..."/>
            </div>
        
        <ContactUs />
        
        
        </>

    );
};


export default AboutUs;