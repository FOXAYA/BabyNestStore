import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import products from "./ProductsList";
import StarRating from "./StarRating";
import { useBasket } from "./BasketContext"; 

const ProductCard = () => {
  const [productList] = useState(
    products.map((product) => ({ ...product, qty: 1 }))
  );

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
                  <div>
                    {product.rating &&
                      [...Array(Math.round(product.rating))].map((_, i) => (
                        <span key={i}>
                          <FaStar style={{ color: "rgb(255, 193, 7)" }} />
                        </span>
                      ))}
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
