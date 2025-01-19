import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../Components/assets/images/product-image12.png";
import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";
import "../Styles/BestSeller.css";
import RandomIcons from "../animation/IconsAnimated";

const BsProduct = () => {
  return (
    <Container className="my-5 bs-product py-4">
      <Row className="mt-6 row gy-4">
        {/* Image Section */}
        <Col xs={12} md={6} sm={12}>
          <div
            className="child-img"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              position: "relative", // Ensure this is the reference for absolute positioning of icons
            }}
          ></div>
        </Col>

        <Col xs={12} md={6} className="bs-card-container">
          <div className="icons-container">
            <RandomIcons group="two" />
          </div>
          <ProductCard
            className="bs-card"
            products={Product}
            category="Boy"
            productId={33}
            columns={1}
          >
          </ProductCard>
          {}
        </Col>
      </Row>
    </Container>
  );
};

export default BsProduct;
