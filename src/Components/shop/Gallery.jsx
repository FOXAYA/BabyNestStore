import React, { useReducer, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import StarRating from "../cards/StarRating";
import "../Styles/Gallery.css";

const initialState = {
  visibleImages: 12,
  sortedImages: [],
  category: "all",
  size: null,
  color: null,
  priceRange: [10, 340],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SORTED_IMAGES":
      return { ...state, sortedImages: action.payload };
    case "SET_VISIBLE_IMAGES":
      return { ...state, visibleImages: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    default:
      return state;
  }
};

const Gallery = ({ images }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { visibleImages, sortedImages, category, size, color, priceRange } =
    state;

  useEffect(() => {
    const filteredImages = images.filter((image) => {
      const inCategory =
        category === "all" ||
        (Array.isArray(image.category)
          ? image.category.includes(category)
          : image.category === category);
      const inSize =
        !size || (Array.isArray(image.sizes) && image.sizes.includes(size));
      const inColor =
        !color || (Array.isArray(image.colors) && image.colors.includes(color));
      const inPriceRange =
        image.price >= priceRange[0] && image.price <= priceRange[1];
      return inCategory && inSize && inColor && inPriceRange;
    });
    dispatch({ type: "SET_SORTED_IMAGES", payload: filteredImages });
  }, [images, category, size, color, priceRange]);

  const handleSort = (e) => {
    const sortBy = e.target.value;
    let sortedArray = [...sortedImages];

    switch (sortBy) {
      case "latest":
        sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "popularity":
        sortedArray.sort((a, b) => b.popularity - a.popularity);
        break;
      case "rating":
        sortedArray.sort((a, b) => b.rating - a.rating);
        break;
      case "price-asc":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    dispatch({ type: "SET_SORTED_IMAGES", payload: sortedArray });
  };

  const handleShowMore = () => {
    dispatch({ type: "SET_VISIBLE_IMAGES", payload: visibleImages + 12 });
  };

  const handleRating = (id, rating) => {
    const updatedImages = sortedImages.map((image) =>
      image.id === id ? { ...image, rating } : image
    );
    dispatch({ type: "SET_SORTED_IMAGES", payload: updatedImages });
  };

  return (
    <Container className="mt-4 mb-4">
      <Row className="g-4 mb-4">
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center"
        >
          <span>
            Showing 1–{Math.min(visibleImages, sortedImages.length)} of{" "}
            {sortedImages.length} results
          </span>
          <select
            id="sort-select"
            onChange={handleSort}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          >
            <option value="latest">Sort by latest</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="price-asc">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </Col>
      </Row>

      {sortedImages.length > 0 ? (
        <Row className="g-4">
          {sortedImages.slice(0, visibleImages).map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3} className="mb-4">
              <Link to={`/product/${product.id}`}>
                <Card
                  className="h-100 position-relative"
                  style={{ overflow: "hidden" }}
                >
                  <Card.Img
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  <div
                    className="card-options"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      padding: "10px",
                      transform: "translateY(100%)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <span>Quick View</span>
                    <span>
                      <MdOutlineShoppingCartCheckout /> Select Options
                    </span>
                  </div>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text>
                        <strong>$ {product.price}</strong>
                      </Card.Text>
                      <div style={{ marginLeft: "auto" }}>
                        <StarRating
                          defaultRating={product.rating}
                          onSetRating={(rating) =>
                            handleRating(product.id, rating)
                          }
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col xs={12}>
            <p>No products were found matching your selection.</p>
          </Col>
        </Row>
      )}
      {visibleImages < sortedImages.length && (
        <Row className="g-4 mt-4 mb-4">
          <Col xs={12} className="d-flex justify-content-center">
            <Button
              variant="warning"
              onClick={handleShowMore}
              style={{ marginBottom: "20px" }}
            >
              Load More
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Gallery;
