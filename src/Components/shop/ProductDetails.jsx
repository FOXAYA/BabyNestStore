import React, { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { SlBasketLoaded } from "react-icons/sl";

import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../shop/GaleryData";
import Navbar from "../Navbar/Navbar";
import { useBasket } from "./BasketContext";
import StarRating from "./StarRating";
import ButtonUi from "../ui/ButtonUi";
import { WaveTop } from "../animation/Wave";
import Footer2 from "../Footer/Footer2";
import "../Styles/Card.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToBasket } = useBasket();

  useEffect(() => {
    const foundProduct = Product.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);

    if (foundProduct) {
      if (foundProduct.colors?.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes?.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const handleBuyNow = () => {
    addToBasket({ ...product, selectedColor, selectedSize }, quantity);
  };

  // ProductButton Component
  function ProductButton({ product }) {
    if (!product.sale) {
      return null;
    }
    return <ButtonUi text={product.sale} className={"btn-1"} />;
  }

  return (
    <div className="body">
      <Navbar />
      <WaveTop className="wave" />
      <div className="main-detials">
        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid w-90 h-100 rounded-5"
              />
            </Col>
            <Col md={6}>
              <div className="product-details d-flex gap-4 flex-column">
                <div className="links d-flex gap-4">
                  <span>Home - </span>
                  <span> Baby Boy - </span>
                  <span> {product.name}</span>
                </div>
                <ProductButton product={product} />
                <h2>{product.name}</h2>
                <h5>{product.brand}</h5>
              </div>
              <div className="d-flex second-details ">
                <h4>
                  $ {product.price.toFixed(2)} - ${" "}
                  {(product.price + 10).toFixed(2)}
                </h4>
                <StarRating
                  defaultRating={product.rating}
                  onSetRating={(rating) =>
                    console.log("Rating set to:", rating)
                  }
                />
              </div>

              {/* Color Selection */}
              <div className="d-flex colors  ">
                <p className="me-4">Color</p>
                {product.colors?.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`color-button ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${color}`}
                  ></button>
                ))}
              </div>

              {/* Size Selection */}
              <p className="mt-2 sizetxt">Size</p>
              <div className="d-flex mb-2">
                {product.sizes.map((size, index) => (
                  <ButtonUi
                    key={index}
                    className={`me-2 ${
                      selectedSize === size ? "unselected" : "selected-size"
                    }`}
                    onClick={() => setSelectedSize(size)}
                    text={size}
                  />
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="d-flex align-items-center gap-2 mt-6">
                <div className="quantity-wrap d-flex  justify-content-around align-items-center">

                  <button
                    className="quantity-btn decrement"
                    onClick={handleDecrease}
                    aria-label="Decrease quantity"
                  >
                    <IoIosArrowDown className="fs-3" />
                  </button>
                  <span className="quantity-display">{quantity}</span>

                  <button
                    className="quantity-btn increment"
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                  >
                    <IoIosArrowUp className="fs-3" />
                  </button>
                </div>
                <button className="buy-btn" onClick={handleBuyNow}>
                  <span className="cart-icon">
                    <SlBasketLoaded />
                  </span>{" "}
                  Buy now
                </button>
                <button className="favorite-btn" aria-label="Add to favorites">
                  &#9825;
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer2 />
    </div>
  );
};

export default ProductDetailPage;
