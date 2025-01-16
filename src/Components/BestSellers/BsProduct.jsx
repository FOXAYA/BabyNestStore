import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../Components/assets/images/product-image12.png";
import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";
import "../Styles/BestSeller.css";
import {
  IconOne,
  IconSeven,
  IconThree,
  IconSix,
  IconTen,
  IconNine,
} from "../animation/IconsAnimated";

const BsProduct = () => {
  return (
    <Container className="my-5 bs-product py-4">
      <Row className="mt-6 row">
        <Col md={6}>
          <div
            className="child-img"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Col>

        <Col md={6} className="bs-card-container">
          <ProductCard
            className="bs-card"
            products={Product}
            category="Boy"
            productId={33}
            columns={1}
          />
          <div>
            <IconOne className="bs-icon-1 all-icons " />
            <IconTen className="bs-icon-2 all-icons" />
          </div>

          <div>
            <IconSeven className="bs-icon-3 all-icons" />
            <IconNine className="bs-icon-4 all-icons" />
            <IconThree className="bs-icon-5 all-icons" />
          </div>

          <div>
            <IconOne className="bs-icon-6 all-icons" />
            <IconOne className="bs-icon-7 all-icons" />
            <IconSix className="bs-icon-8 all-icons" />
            <IconOne className="bs-icon-9 all-icons" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BsProduct;
