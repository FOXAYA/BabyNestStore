import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import products from "./ProductsList";
import NavbarLayout from "../layouts/NavbarLayout";
import { BasketContext } from "./BasketContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useContext(BasketContext);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const handleBuyNow = () => {
    addToBasket(product, quantity);
  };

  const totalPrice = product.price * quantity;

  return (
    <>
      <NavbarLayout />
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <img src={product.image} alt={product.name} className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <h2>{product.name}</h2>
            <h4 className="text-warning">$ {product.price}</h4>
            <div>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  style={{
                    color: i < Math.round(product.rating) ? "rgb(255, 193, 7)" : "#ccc",
                  }}
                />
              ))}
            </div>
            <p className="mt-3">Available Colors:</p>
            <div className="d-flex">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: color,
                    marginRight: "10px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                  }}
                ></div>
              ))}
            </div>
            <p className="mt-3">Sizes:</p>
            <div className="d-flex">
              {product.sizes.map((size, index) => (
                <Button key={index} variant="outline-secondary" className="me-2">
                  {size}
                </Button>
              ))}
            </div>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <Button variant="outline-secondary" onClick={handleDecrease}>
                  -
                </Button>
                <span className="mx-3">{quantity}</span>
                <Button variant="outline-secondary" onClick={handleIncrease}>
                  +
                </Button>
              </div>
              <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
            </div>
            <Button variant="primary" className="mt-4" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailPage;
