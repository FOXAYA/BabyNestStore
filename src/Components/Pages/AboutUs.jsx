import React from "react";
import Footer2 from "../Footer/Footer2";
import { Container, Row, Col } from "react-bootstrap";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar"
import img1 from "../assets/images/about-image1.jpg"
import img2 from "../assets/images/blog2.jpg"


import "bootstrap/dist/css/bootstrap.min.css";

//import Forms from "./Form"

import Numbers from "./Number";





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

                            <Numbers />

                        </div>
                    </Col>
                </Row>
            </Container>

            <div
            style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
            >
                <div
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.67)", // لون خلفية شبه شفاف
                    borderRadius: "15px",
                    padding: "30px",
                    maxWidth: "600px",
                    width: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                        Contact Us
                    </h2>
                    {/*<Forms />*/}
                </div>
            </div>
        <Footer2 />
        </>
    );
};


export default AboutUs;