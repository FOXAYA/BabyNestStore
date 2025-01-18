import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import myimg1 from "../assets/images/home-1.png";
import myimg2 from "../assets/images/home-2.png";
import myimg3 from "../assets/images/home-3.png";
import ButtonUi from "../ui/ButtonUi";
import { WaveBottom, WaveTop } from "../animation/Wave";
import "../Styles/Home.css";
import RandomIcons from "../animation/IconsIcos";

const slides = [
  {
    title: "Find our new collection Here",
    subtitle: "Shop the best outfits for playtime, school, or special moments.",
    image: myimg1,
    label: "FOR ANY AGE & GENDER",
  },
  {
    title: "Discover our latest kids' collections",
    subtitle:
      "High-quality, stylish, and fun essentials your little ones will love.",
    image: myimg2,
    label: "DESIGNED FOR ALL AGES",
  },
  {
    title: "A catalog of new clothing item",
    subtitle:
      "Check out our fresh arrivals and get the best deals on high-quality clothing.",
    image: myimg3,
    label: "FOR ANY AGE & GENDER",
  },
];

class Home extends Component {
  renderSlide = ({ title, subtitle, image, label }) => (
    <Carousel.Item>
      <div className="slider-content">
        {/* Text Section */}
        <div className="slider-text">
          <h6>{label}</h6>
          <h1 className="h1_home">{title}</h1>
          <p className="lead fs-6 p_home">{subtitle}</p>
          <ButtonUi
            className="btn-one rounded-5 px-5 py-3 text-white fw-bolder"
            text={"Shop Now"}
          />
        </div>

        {/* Image Section */}
        <div className="slider-image">
          <img src={image} alt={title} className="img-fluid slider-img" />
        </div>
      </div>
    </Carousel.Item>
  );

  render() {
    return (
      <div className="home-container">
        {/* Background Animation */}
        <div className="animation-background">
          {/* Only render group "one" */}
          <RandomIcons group="one" />
        </div>

        {/* Carousel Content */}
        <WaveTop />
        <Carousel className="custom-carousel slider-bg">
          {slides.map(this.renderSlide)}
        </Carousel>
        <WaveBottom />
      </div>
    );
  }
}

export default Home;
