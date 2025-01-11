import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Maintitles from "../layouts/Maintitles";
import product from "../shop/GaleryData";
import "../Styles/Card.css";
import StarRating from "./StarRating";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState(null); // إضافة حالة لإدارة اللون المحدد

  const bestSellers = product.filter((product) =>
    Array.isArray(product.category)
      ? product.category.includes("BestSellers")
      : product.category === "BestSellers"
  );

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
                    <span className="price">${product.price}</span>
                    <StarRating />
                  </Card.Text>
                  <div className="d-flex mb-4">
                    {product.colors?.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          width: "24px",
                          height: "24px",
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
