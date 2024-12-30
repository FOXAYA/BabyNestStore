import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import img1 from "../assets/images/product-image1.jpg";
import img2 from "../assets/images/product-image2.jpg";
import img3 from "../assets/images/product-image3.jpg";
import img4 from "../assets/images/product-image4.jpg";
import img5 from "../assets/images/product-image5.jpg";
import img6 from "../assets/images/product-image6.jpg";

const products = [
  { id: 1, image: img1, name: "Baby Bodysuit", price: 90, rating: 4.5, colors: ["#000", "#8B4513", "#C0C0C0"], sizes: ["0-3 m", "3-6 m", "6-12 m"] },
  { id: 2, image: img2, name: "Baby Romper", price: 75, rating: 3, colors: ["#FFF", "#ADD8E6"], sizes: ["0-3 m", "3-6 m", "6-12 m"] },
  { id: 3, image: img3, name: "Baby Sweater", price: 100, rating: 2, colors: ["#FF6347", "#FFD700"], sizes: ["6-12 m", "12-18 m"] },
  { id: 4, image: img4, name: "Newborn Bootie", price: 80, rating: 4, colors: ["#000", "#FFF"], sizes: ["0-3 m"] },
  { id: 5, image: img5, name: "Cotton Sweatshirt", price: 55, rating: 4.5, colors: ["#A52A2A", "#808080"], sizes: ["3-6 m", "6-12 m"] },
  { id: 6, image: img6, name: "Girl Cardigan", price: 90, rating: 4.5, colors: ["#FF69B4", "#8A2BE2"], sizes: ["6-12 m", "12-18 m"] },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h4 className="text-warning">$ {product.price}</h4>
          <div>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                style={{
                  color: i < Math.round(product.rating) ? "rgb(255, 193, 7)" : "#ccc",
                }}
              />
            ))}
          </div>
          <p className="mt-3">Available Colors:</p>
          <div className="d-flex">
            {product.colors.map((color, index) => (
              <div
                key={index}
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: color,
                  marginRight: "10px",
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                }}
              ></div>
            ))}
          </div>
          <p className="mt-3">Sizes:</p>
          <div className="d-flex">
            {product.sizes.map((size, index) => (
              <Button key={index} variant="outline-secondary" className="me-2">
                {size}
              </Button>
            ))}
          </div>
          <Button variant="primary" className="mt-4">Buy Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
