import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import trendyimg from "../assets/images/trendy.jpg";
import img1 from "../assets/images/bag.png";
import img2 from "../assets/images/romper.png";
import img3 from "../assets/images/toy-train.png";
import ButtonUi from "../ui/ButtonUi";
import { WaveBottom } from "../animation/Wave";
import "../Styles/Trendy.css";

const TrendySection = () => {
  return (
    <>
      {/* Trendy Clothing Section */}
      <div className="trendy-section-wrapper mt-5">
        <div
          className="trendy-section wavy-background"
          style={{
            backgroundImage: `url(${trendyimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          <WaveBottom className="wave-top" fill="#fff" />
          <Container
            fluid
            className="d-flex flex-column align-items-start justify-content-between h-100"
          >
            <div className="trendy-text text-center text-md-start">
              <p className="subtitle">TRENDY CLOTHING</p>
              <h1 className="main-title">
                Get ready for a stylish autumn at our shop
              </h1>
              <ButtonUi
                text={"View All Collections"}
                className="fs-5 trendy-btn rounded-5 px-5 py-3 text-white btn-one mt-3"
              />
            </div>
          </Container>
        </div>
      </div>

      {/* Icons Section */}
      <section className="Icons">
        <Container fluid>
          <Row className="icon-container">
            {/* First Feature */}
            <Col xs={12} md={4}>
              <article className="Fa d-flex flex-column gap-3">
                <img src={img1} alt="Fast delivery icon" className="icon" />
                <h3 className="title">Fast Delivery</h3>
                <p className="desc">
                  Natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem.
                </p>
              </article>
            </Col>

            {/* Second Feature */}
            <Col xs={12} md={4} className="">
              <article className="Fa d-flex flex-column gap-3">
                <img src={img2} alt="Kids' clothing icon" className="icon" />
                <h4 className="title">Kids’ Clothing</h4>
                <p className="desc">
                  Natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem.
                </p>
              </article>
            </Col>

            {/* Third Feature */}
            <Col xs={12} md={4} classNam="">
              <article className="Fa d-flex flex-column gap-3">
                <img
                  src={img3}
                  alt="Toys & accessories icon"
                  className="icon"
                />
                <h4 className="title">Toys & Accessories</h4>
                <p className="desc">
                  Natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem.
                </p>
              </article>
            </Col>
          </Row>
        </Container>
        <WaveBottom className="wave-bottom" />
      </section>
    </>
  );
};

export default TrendySection;
