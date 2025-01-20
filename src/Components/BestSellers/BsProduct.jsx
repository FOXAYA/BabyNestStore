import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../Components/assets/images/product-image12.png";
import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";
import "../Styles/BestSeller.css";
import RandomIcons from "../animation/IconsAnimated";

// Component for displaying a product section with an image and product card
const BsProduct = () => {
  return (
    <Container className="my-5 bs-product py-4">
      <Row className="mt-6 row gy-4">
        {/* Image Section displaying background image */}
        <Col xs={12} md={6} sm={12}>
          <div
            className="child-img"
            style={{
              backgroundImage: `url(${img1})`, // Background image URL
              backgroundSize: "cover", // Ensure the image covers the div area
              backgroundPosition: "center", // Center the image
              backgroundRepeat: "no-repeat", // Prevent image repetition
              minHeight: "300px", // Minimum height for the image container
              position: "relative", // Required for absolute positioning of content if needed
            }}
          ></div>
        </Col>

        {/* Product card section */}
        <Col xs={12} md={6} className="bs-card-container">
          <div className="icons-container">
            <RandomIcons group="two" /> {/* Animated icons displayed */}
          </div>
          <ProductCard
            className="bs-card"
            products={Product} // Passing product data
            category="Boy" // Category filter
            productId={33} // Specific product ID for focus
            columns={1} // Display one column of products
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BsProduct;
