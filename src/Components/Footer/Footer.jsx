import React from "react";
import "../Styles/Footer.css";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaDribbble,
  FaFacebookSquare,
} from "react-icons/fa";
import { WaveTop } from "../animation/Wave";
import RandomIcons from "../animation/IconsAnimated";
import footerlogo from "../assets/images/logo.jpeg";
import footerimg1 from "../assets/images/insta-image1.jpg";
import footerimg2 from "../assets/images/insta-image2.jpg";
import footerimg3 from "../assets/images/insta-image3.jpg";
import footerimg4 from "../assets/images/insta-image4.jpg";
import footerimg5 from "../assets/images/insta-image5.jpg";
import footerimg6 from "../assets/images/insta-image6.jpg";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <WaveTop className="wave-footer" fill={"#F8F4EB"} />
      <footer>
        <div className="footer-icons">
          <RandomIcons group="three" />
        </div>

        <Container>
          {/* Instagram Section */}
          <Row className="justify-content-center text-center mb-4">
            <Col xs={12}>
              <div className="instagram">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="insta-icon me-2">
                    <FaInstagramSquare />
                  </div>
                  <div className="insta-text">
                    <p className="mb-0">Instagram</p>
                  </div>
                </a>
              </div>
            </Col>
          </Row>

          {/* Instagram Images Section */}
          <Row className="justify-content-center g-4">
            {[
              footerimg1,
              footerimg2,
              footerimg3,
              footerimg4,
              footerimg5,
              footerimg6,
            ].map((img, index) => (
              <Col
                xs={6}
                sm={4}
                md={2}
                key={index}
                className="d-flex justify-content-center"
              >
                <Image
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  width={120}
                  height={120}
                  rounded
                />
              </Col>
            ))}
          </Row>

          {/* Logo Section */}
          <Row className="text-center my-4">
            <Col>
              <Image src={footerlogo} alt="Logo" width={70} fluid />
            </Col>
          </Row>

          {/* Navigation Links Section */}
          <Row className="justify-content-center">
            <Nav className="justify-content-center flex-wrap">
              {[
                { label: "Home", href: "/home" },
                { label: "Blog", href: "/blog" },
                { label: "Shop", href: "/shop" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <Nav.Item key={index}>
                  <Nav.Link href={link.href} className="nav-link text-dark">
                    {link.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Row>

          {/* Social Icons Section */}
          <Row className="justify-content-center my-4">
            <ul className="d-flex list-unstyled social-icons justify-content-center flex-wrap">
              {[
                {
                  icon: <FaFacebookSquare />,
                  href: "https://www.facebook.com",
                  className: "facebook",
                },
                {
                  icon: <FaTwitterSquare />,
                  href: "https://www.twitter.com",
                  className: "twitter",
                },
                {
                  icon: <FaDribbble />,
                  href: "https://www.dribbble.com",
                  className: "dribbble",
                },
                {
                  icon: <FaInstagramSquare />,
                  href: "https://www.instagram.com",
                  className: "instagram",
                },
              ].map((social, index) => (
                <li className="m-2" key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${social.className}`}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Row>
        </Container>

        {/* Footer Bottom Section */}
        <div className="footer-bottom py-3">
          <Container>
            <Row>
              <Col className="text-center">
                <span>
                  <a href="/home">BabyNest</a> © 2025. All rights reserved.
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;