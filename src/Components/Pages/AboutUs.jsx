import React from "react";
import Footer2 from "../Footer/Footer2";
import { Container, Row, Col } from "react-bootstrap";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar";
import img1 from "../assets/images/about-image1.jpg";
import img2 from "../assets/images/blog2.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/aboutUs.css";
import Forms from "./Forms";
import Numbers from "./Number";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <Container className="my-5">
        <Row className="mt-6 align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src={img1} alt="Child" className="img-fluid-rounded" />
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column">
            <h5 className="text-bold">Toys and clothing</h5>
            <h1 className="heading-bold">Your children deserve the best</h1>
            <p className="text-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. Sed ut
              perspiciatis unde omnis.
            </p>
            <p className="text-muted">
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam. Sed ut perspiciatis unde omnis iste.
            </p>
            <Numbers />
          </Col>
        </Row>
      </Container>

      <div
        className="background-cover"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="contact-container">
          <h2 className="text-center mb-4 contact-header">Contact Us</h2>
          <Forms />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default AboutUs;
