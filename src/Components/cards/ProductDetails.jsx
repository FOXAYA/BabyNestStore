import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "./ProductsList";
import NavbarLayout from "../layouts/NavbarLayout";
import { useBasket } from "./BasketContext";
import StarRating from "./StarRating"; 

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { getItemQuantity, increaseQuantity, decreaseQuantity, addToBasket } = useBasket();
  const quantity = getItemQuantity(parseInt(id));

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);

    if (foundProduct) {
      if (foundProduct.colors?.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes?.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleIncrease = () => {
    increaseQuantity(product.id);
  };

  const handleDecrease = () => {
    decreaseQuantity(product.id);
  };

  const handleBuyNow = () => {
    addToBasket({ ...product, selectedColor, selectedSize }, quantity);
  };

  const handleRating = (rating) => {
    
    console.log(`New rating for product ${product.id}: ${rating}`);
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
            <p>Home - Baby Boy - {product.name}</p>
            <h2>{product.name}</h2>
            <h5>{product.brand}</h5>
            <h4 className="text-warning">
              $ {product.price.toFixed(2)} - $ {(product.price + 5).toFixed(2)}
            </h4>
            <div className="d-flex mb-3">
              <StarRating defaultRating={product.rating} onSetRating={handleRating} />
            </div>
            <p>Color:</p>
            <div className="d-flex mb-4">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: color,
                    border: selectedColor === color ? "2px solid black" : "1px solid #ddd",
                    borderRadius: "50%",
                    cursor: "pointer",
                    marginRight: "8px",
                  }}
                  aria-label={`Select color ${color}`}
                ></button>
              ))}
            </div>
            <p>Size:</p>
            <div className="d-flex mb-4">
              {product.sizes.map((size, index) => (
                <Button
                  key={index}
                  variant={selectedSize === size ? "primary" : "outline-secondary"}
                  className="me-2"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
            <div className="d-flex align-items-center mb-4">
              <Button variant="outline-secondary" onClick={handleDecrease}>
                -
              </Button>
              <span className="mx-3">{quantity}</span>
              <Button variant="outline-secondary" onClick={handleIncrease}>
                +
              </Button>
            </div>
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
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
