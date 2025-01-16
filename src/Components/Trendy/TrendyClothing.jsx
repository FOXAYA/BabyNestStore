import React, { Component } from "react";
import { Container } from "react-bootstrap";
import trendyimg from "../assets/images/trendy.jpg";
import ButtonUi from "../ui/ButtonUi";
import { WaveBottom } from "../animation/Wave";
import "../Styles/Trendy.css";

class TrendyClothing extends Component {
  render() {
    return (
      <>
        <div className="trendy-section-wrapper mt-5">
          <div
            className="trendy-section wavy-background "
            style={{
              backgroundImage: `url(${trendyimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "90vh",
            }}  
          >
            <WaveBottom className="wave-top" fill="#fff" />

            <Container className="d-flex flex-column align-items-start justify-content-between">
              <div className="trendy-text">
                <p className="subtitle">TRENDY CLOTHING</p>
                <h1 className="main-title">
                  Get ready for a stylish autumn at our shop
                </h1>
                <ButtonUi
                  text={"View All Collections"}
                  className="fs-5 trendy-btn rounded-5 px-5 py-3 text-white btn-one"
                />
              </div>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default TrendyClothing;
