import React, { useState } from "react";
import { Container, Row, Col, Card, Button, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import products from "./ProductsList";

const ProductCard = () => {
  // Use imported products as the initial state
  const [setProducts] = useState(
    products.map((product) => ({ ...product, qty: 1 }))
  );

  const increaseQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, qty: (product.qty || 0) + 1 } : product
      )
    );
  };

  const decreaseQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.qty > 1
          ? { ...product, qty: product.qty - 1 }
          : product
      )
    );
  };

  const removeFromCart = (index) => {
    if (
      window.confirm(
        "Are you sure you want to remove this item from your cart?"
      )
    ) {
      setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
    }
  };

  const cartTotalQty = products.reduce(
    (acc, product) => acc + (product.qty || 0),
    0
  );
  const cartTotalAmount = products.reduce(
    (acc, product) => acc + (product.price || 0) * (product.qty || 0),
    0
  );

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-4">Shopping Cart</h3>
      <Row className="g-4">
        {products.map((product, index) => (
          <Col key={product.id} md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Link to={`/product/${product.id}`}>
                <div className="card-options">
                  <span>Quick View</span>
                  <span>
                    {" "}
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
                  <CardText>
                    {product.rating &&
                      [...Array(Math.round(product.rating))].map((_, i) => (
                        <span key={i}>
                          <FaStar style={{ color: "rgb(255, 193, 7)" }} />
                        </span>
                      ))}
                  </CardText>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </Button>
                  <span>{product.qty}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <div className="text-center">
        <h5>Total Items in Cart: {cartTotalQty}</h5>
        <h5>Total Amount: ${cartTotalAmount.toFixed(2)}</h5>
      </div>
    </Container>
  );
};

export default ProductCard;
