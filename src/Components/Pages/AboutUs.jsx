import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar"
import Numbers from "./Number";
import Forms from "./Forms"
import Footer2 from "../Footer/Footer2";
import img1 from "../assets/images/about-image1.jpg"
import img2 from "../assets/images/blog2.jpg"
import img3 from "../assets/images/cathy-image1.jpg"
import img4 from "../assets/images/linda-image2.jpg"
import img5 from "../assets/images/jennifer-image3.jpg"


const AboutUs = () => {
    return (
        <>
        <Navbar />
        <AboutHeader />
            <Container className="my-5">
                <Row className="mt-5">
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
                    style={{  borderRadius: "10px" }}
                    >
                        <div>
                            <h5 style={{ color: "#2c2c55", fontWeight: "bold", marginBottom: "15px"}}>Toys and clothing</h5>
                            <h1 style={{ color: "#2c2c54", fontWeight: "bold", marginBottom: "20px", lineHeight: "1.4" }}>
                                Your children deserve the best
                            </h1>
                            <p style={{color: "#767575"}}>Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis.</p>
                            <p style={{color: "#767575"}}>Sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam. Sed ut perspiciatis unde omnis iste.</p>

                            <Numbers />
                        </div>
                    </Col>
                </Row>
            </Container>

            <div
            className="d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
            >
                <div
                    className="container p-4"
                    style={{
                    backgroundColor: "rgba(255, 255, 255, 0.37)",
                    borderRadius: "15px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

                    }}
                >
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                            Contact Us
                            </h2>
                            <Forms />
                        </div>
                    </div>
                </div>
            </div>

           {/* add carousel */}
            <Container className="my-5">
                <Carousel>
                    <Carousel.Item>
                        <div className="text-center mb-5">
                            <img
                                className="rounded-circle"
                                src={img3}
                                alt="Client 1"
                                style={{ width: "100px", height: "100px", objectFit: "cover", marginTop:" 60px" }}
                            />
                            <p className="mt-3">
                                "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia<br/> voluptas sit aspernatur
                                aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing<br/> elit, sed do eiusmod tempor incididunt."
                            </p>
                            <h3>Cathy Gordon</h3>
                            <h6>Client</h6>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="text-center mb-5">
                            <img
                                className="rounded-circle"
                                src={img4}
                                alt="Client 2"
                                style={{ width: "100px", height: "100px", objectFit: "cover", marginTop:" 60px" }}
                            />
                            <p className="mt-3">
                                "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia<br/> voluptas sit aspernatur
                                aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing<br/> elit, sed do eiusmod tempor incididunt."
                            </p>
                            <h3>Linda Moore</h3>
                            <h6>Client</h6>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="text-center mb-5">
                            <img
                                className="rounded-circle"
                                src={img5}
                                alt="Client 3"
                                style={{ width: "100px", height: "100px", objectFit: "cover", marginTop:" 60px" }}
                            />
                            <p className="mt-3">
                                "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia<br/> voluptas sit aspernatur
                                aut odit aut fugit, sed. Beatae vitae dicta. Adipiscing<br/> elit, sed do eiusmod tempor incididunt."
                            </p>
                            <h3>Jennifer Lee</h3>
                            <h6>Client</h6>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        <Footer2 />
        </>
    );
};


export default AboutUs;