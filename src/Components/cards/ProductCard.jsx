import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import products from "./ProductsList";
import Maintitles from "../layouts/Maintitles";

const ProductCard = () => {
  const [productList] = useState(
    products.map((product) => ({ ...product, qty: 1 }))
  );

  return (
    <>
      <div>
        <Maintitles title="Best Sellers" subtitle="Our Faves" />
      </div>
      <Container className="mt-4">
        <Row className="g-4">
          {productList.map((product) => (
            <Col key={product.id} md={4}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
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
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductCard;