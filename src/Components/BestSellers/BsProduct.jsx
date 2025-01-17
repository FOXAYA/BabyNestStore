import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../Components/assets/images/product-image12.png";
import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";
import "../Styles/BestSeller.css";

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

            }}
          ></div>
        </Col>

        {/* Card Section */}
        <Col xs={12} md={6} className="bs-card-container">
          <ProductCard
            className="bs-card"
            products={Product}
            category="Boy"
            productId={33}
            columns={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BsProduct;
