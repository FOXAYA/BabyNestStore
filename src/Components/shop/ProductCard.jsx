import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import PropTypes from "prop-types";
import StarRating from "./StarRating";

const ProductCard = ({
  title = "",
  subtitle = "",
  products = [],
  category = "Boy",
  productId = null,
  columns = 4,
  className = "",
  children, 
}) => {
  const [selectedColors, setSelectedColors] = useState({});

  // Filter products based on category and productId (if provided)
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = Array.isArray(prod.category)
      ? prod.category.includes(category)
      : prod.category === category;

    const matchesId = productId ? prod.id === productId : true;

    return matchesCategory && matchesId;
  });

  // Handle color selection for a specific product
  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  // Handle rating changes
  const handleRating = (id, rating) => {
    const updatedProducts = filteredProducts.map((prod) =>
      prod.id === id ? { ...prod, rating } : prod
    );
    console.log("Updated Ratings:", updatedProducts);
  };

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center">
        No products available in this category or matching the ID.
      </p>
    );
  }

  return (
    <>
      <div className="text-center maintitles">
        <span>{title}</span>
        <h1>{subtitle}</h1>
      </div>
      <Container className="py-4">
        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} md={12 / columns} className="mt-5">
              <Card className={`product-card ${className}`}>
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name || "Product image"}
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
                      ${product.price.toFixed(2)} - $
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
                        key={index}
                        onClick={() => handleColorSelect(product.id, color)}
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: color,
                          border:
                            selectedColors[product.id] === color
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
                    {/* محتوى مخصص يمرر عبر children */}
                    {children && <div className="custom-content">{children}</div>}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number,
      colors: PropTypes.arrayOf(PropTypes.string),
      category: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    })
  ).isRequired,
  category: PropTypes.string,
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columns: PropTypes.number,
  className: PropTypes.string, // Accept className for custom styles
};

export default ProductCard;
