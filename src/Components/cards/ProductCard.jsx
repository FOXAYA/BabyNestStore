import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import products from "./ProductsList";
import StarRating from "./StarRating"; 

const ProductCard = () => {
  const [productList] = useState(
    products.map((product) => ({ ...product, qty: 1 }))
  );

  const [ratings, setRatings] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.rating;
      return acc;
    }, {})
  );

  const handleRating = (id, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [id]: rating }));

  };

  return (
    <Container className="mt-4">
      <Row className="g-4">
        {productList.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Link to={`/product/${product.id}`}>
                <div className="card-options">
                  <span>Quick View</span>
                  <span>
                    <MdOutlineShoppingCartCheckout /> Select Options
                  </span>
                </div>
              </Link>
              <Card.Body>
                <Card.Title>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>
                    <strong>$ {product.price}</strong>
                  </Card.Text>
                  <div style={{ marginLeft: "auto" }}>
                    <StarRating
                      defaultRating={ratings[product.id]}
                      onSetRating={(rating) => handleRating(product.id, rating)}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCard;
