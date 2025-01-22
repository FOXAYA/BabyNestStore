import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Maintitles from "../layouts/Maintitles";
import product from "../shop/GaleryData";
import "../Styles/Card.css";
import StarRating from "./StarRating";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const bestSellers = product.filter((product) =>
    Array.isArray(product.category)
      ? product.category.includes("BestSellers")
      : product.category === "BestSellers"
  );

  // Function to handle rating change
  const handleRating = (id, rating) => {
    const updatedProducts = bestSellers.map((prod) =>
      prod.id === id ? { ...prod, rating } : prod
    );
    // Update the bestSellers or use a state management approach to persist the updated ratings
    console.log("Updated Ratings:", updatedProducts);
  };

  return (
    <>
      <div>
        <Maintitles title="Best Sellers" subtitle="Our Faves" />
      </div>
      <Container className="p-4">
        <Row className="g-4">
          {bestSellers.map((product) => (
            <Col key={product.id} md={4} className="mt-5">
              <Card className="product-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="card-options">
                    <Link to={`/product/${product.id}`} className="option-link">
                      Quick View
                    </Link>
                    <Link to={`/product/${product.id}`} className="option-link">
                      <MdOutlineShoppingCartCheckout /> Select Options
                    </Link>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/product/${product.id}`} className="title-link">
                      {product.name}
                    </Link>
                  </Card.Title>
                  <Card.Text className="price-container d-flex justify-content-between">
                    <span className="price">
                      {" "}
                      $ {product.price.toFixed(2)} - ${" "}
                      {(product.price + 10).toFixed(2)}
                    </span>
                    <StarRating
                      defaultRating={product.rating}
                      onSetRating={(rating) => handleRating(product.id, rating)}
                    />
                  </Card.Text>
                  <div className="d-flex mb-4">
                    {product.colors?.map((color, index) => (
                      <button
                        className="color-button"
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: color,
                          border:
                            selectedColor === color
                              ? "2px solid black"
                              : "1px solid #ddd",
                          borderRadius: "50%",
                          cursor: "pointer",
                          marginRight: "8px",
                        }}
                        aria-label={`Select color ${color}`}
                      ></button>
                    ))}
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
