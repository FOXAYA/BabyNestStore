import React from "react";
import "../Styles/BestSeller.css";
import sweet from "../assets/images/product-category5.jpg";
import swim from "../assets/images/product-category6.jpg";
import toys from "../assets/images/product-category7.jpg";
import jackets from "../assets/images/product-category8.jpg";
import denim from "../assets/images/product-category9.jpg";
import dress from "../assets/images/product-category10.jpg";
import { Link } from "react-router-dom"; 
import { Container, Row, Col } from "react-bootstrap";

// Component to display a list of category images with titles
const BsCatogeries = () => {
  const images = [
    { src: sweet, alt: "Sweatshirts" },
    { src: swim, alt: "Swimsuits" },
    { src: toys, alt: "Toys" },
    { src: jackets, alt: "Jackets" },
    { src: denim, alt: "Denim" },
    { src: dress, alt: "Dresses" },
  ];

  return (
    <Container className="py-4 bs-Catogeries">
      <Row className="g-4">
        {images.map((image, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="text-center d-flex flex-column align-items-center justify-content-center"
          >
            <Link to="/shop" className="text-decoration-none">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid rounded image"
              />
              <p className="mt-2 alt">{image.alt}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BsCatogeries;
