import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

import footerlogo from "../assets/images/logo.png";
import footerimg1 from "../assets/images/insta-image1.jpg";
import footerimg2 from "../assets/images/insta-image2.jpg";
import footerimg3 from "../assets/images/insta-image3.jpg";
import footerimg4 from "../assets/images/insta-image4.jpg";
import footerimg5 from "../assets/images/insta-image5.jpg";
import footerimg6 from "../assets/images/insta-image6.jpg";

import { Container, Row, Col, Image } from "react-bootstrap";
import NavS from "./NavS";

const Footer = () => {
    return (
        <footer>
            <Container>
                {/* Instagram Section */}
                <Row className="justify-content-center text-center mb-4">
                    <Col xs={12}>
                        <div className="instagram">
                            <a href="i" className="d-flex align-items-center justify-content-center">
                                <div className="insta-icon me-2">
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </div>
                                <div className="insta-text">
                                    <p className="mb-0">instagram</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Instagram Images Section */}
                <Row className="justify-content-center g-5">
                    {[
                        footerimg1,
                        footerimg2,
                        footerimg3,
                        footerimg4,
                        footerimg5,
                        footerimg6
                    ].map((img, index) => (
                        <Col
                            xs={6}
                            sm={4}
                            md={2}
                            key={index}
                            className="d-flex justify-content-center mb-3">
                            <Image src={img} alt={`Instagram ${index + 1}`} width={150} rounded />
                        </Col>
                    ))}
                </Row>

                {/* Logo Section */}
                <Row className="text-center my-4">
                    <Col>
                        <Image src={footerlogo} alt="Logo" width={70} fluid />
                    </Col>
                </Row>
                <NavS />
                
                {/* Social Icons Section */}
                <Row className="justify-content-center my-4">
                    <ul className="d-flex list-unstyled social-icons justify-content-center flex-wrap">
                        <li className="m-2">
                            <a href="https://www.facebook.com" className="social-link facebook">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="https://www.twitter.com" className="social-link twitter">
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="https://www.basketball.com" className="social-link basketball">
                                <FontAwesomeIcon icon={faBasketballBall} size="1x" />
                            </a>
                        </li>
                        <li className="m-2">
                            <a href="https://www.instagram.com" className="social-link instagram">
                                <FontAwesomeIcon icon={faInstagram} size="1x" />
                            </a>
                        </li>
                    </ul>
                </Row>
            </Container>

            {/* Footer Bottom Section */}
            <div className="footer-bottom py-3">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <span>
                                <a href="l">AncoraThemes </a>© 2024. All rights reserved.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;