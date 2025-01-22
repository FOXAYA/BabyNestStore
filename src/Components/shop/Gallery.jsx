import React, { useReducer, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import "../Styles/Gallery.css";
import ButtonUi from "../ui/ButtonUi";
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
  const [selectedColor, setSelectedColor] = useState(null);

  React.useEffect(() => {
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

  return (
    <Container fluid className="mt-4 mb-4">
      <Row className="g-4 mb-4">
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center flex-wrap"
        >
          <span className="above-catogary">
            Showing 1–{Math.min(visibleImages, sortedImages.length)} of{" "}
            {sortedImages.length} results
          </span>
          <select
            id="sort-select"
            onChange={handleSort}
            className="form-select w-auto"
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
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card className="product-card2 h-100">
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
                <Card.Body className="d-flex flex-column">
                  <Card.Title>
                    <Link to={`/product/${product.id}`} className="title-link">
                      {product.name}
                    </Link>
                  </Card.Title>
                  <Card.Text className="price-container d-flex justify-content-between">
                    <span className="price">
                      $ {product.price.toFixed(2)} - $
                      {(product.price + 10).toFixed(2)}
                    </span>
                  </Card.Text>
                  <div className="d-flex">
                    {product.colors?.map((color, index) => (
                      <button
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
      ) : (
        <Row>
          <Col xs={12}>
            <p className="no-results-text text-center">
              No products were found matching your selection.
            </p>
          </Col>
        </Row>
      )}
      {visibleImages < sortedImages.length && (
        <Row className="mt-4 mb-4 ">
          <Col xs={12} className="d-flex justify-content-center">
            <ButtonUi
              className="btn-one rounded-5 px-5 py-3 text-white "
              text={"Load More"}
              onClick={handleShowMore}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Gallery;
