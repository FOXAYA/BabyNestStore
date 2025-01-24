import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import img1 from "../assets/images/product-category1.jpg";
import img2 from "../assets/images/product-category2.jpg";
import img3 from "../assets/images/product-category3.jpg";
import img4 from "../assets/images/product-category4.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../Styles/HomeCategories.css";

class CategoriesList extends Component {
  render() {
    const categories = [
      {
        title: "Baby girl",
        image: img1,
        link: "/shop",
      },
      {
        title: "Baby boy",
        image: img2,
        link: "/shop", // Add a link to avoid empty links
      },
      {
        title: "Girl",
        image: img3,
        link: "/shop", // Add a link to avoid empty links
      },
      {
        title: "Boy",
        image: img4,
        link: "/shop", // Add a link to avoid empty links
      },
    ];

    return (
      <Container className="my-5">
        <Row className="g-4">
          {categories.map((category, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card className="text-center shadow-sm h-100 category-card position-relative">
                <Card.Img
                  variant="top"
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
                <Card.Body className="card-body d-flex flex-column justify-content-center position-absolute w-100 h-100">
                  <Card.Title className="category-title position-absolute">
                    {category.title}
                  </Card.Title>
                  <Link
                    to={category.link}
                    className="shop-now-btn position-absolute"
                  >
                    Shop Now <FaArrowRight />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CategoriesList;
