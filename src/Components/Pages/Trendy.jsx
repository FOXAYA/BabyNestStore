import React, { Component } from "react";
import { Container } from "react-bootstrap";
import trendyimg from "../assets/images/trendy.jpg";
import ButtonUi from "../ui/ButtonUi";
import { WaveBottom, WaveTop } from "../animation/Wave";

class Trendy extends Component {
  render() {
    return (
      <>
        <div className="trendy-section-wrapper">
          <div
            className="trendy-section"
            style={{
              backgroundImage: `url(${trendyimg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height:"90vh",
            }}
            
          >
          <WaveBottom fill="#fff" duration={2} className="wave-bottom"/>

            <Container >
              <div className="trendy-text">
                <p className="subtitle">TRENDY CLOTHING</p>
                <h1 className="main-title">
                  Get ready for a stylish autumn at our shop
                </h1>
                <ButtonUi
                  text={"View All Collections"}
                  className="fs-5 trendy-btn"
                />
              </div>
            </Container>
            <WaveTop fill={"#fff"} duration={2} className="wave-top" />
          </div>
        </div>
      </>
    );
  }
}

export default Trendy;
