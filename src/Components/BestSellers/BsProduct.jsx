import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../Components/assets/images/product-image12.png";
import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";
const BsProduct = () => {
  return (
    <Container className="my-5">
      <Row className="mt-6">
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={img1}
            alt="Child"
            className="img-fluid rounded"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
          />
        </Col>

        <Col
          md={6}
          className="d-flex justify-content-center"
          style={{ background: "#F8F4EC", borderRadius: "10px" }}
        >


<ProductCard
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
