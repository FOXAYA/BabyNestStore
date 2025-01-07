import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import myimg1 from "../assets/images/home-1.png";
import myimg2 from "../assets/images/home-2.png";
import myimg3 from "../assets/images/home-3.png";
import ButtonUi from "../ui/ButtonUi";
import { WaveBottom, WaveTop } from "../animation/Wave";
import {
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
  IconFive,
} from "../animation/IconsAnimated";
import "./Home.css";

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
      <div className="d-flex align-items-center justify-content-center slider-content">
        <div className="slider-text">
          <h6>{label}</h6>
          <h1 className="h1_home">{title}</h1>
          <p className="lead fs-6 p_home">{subtitle}</p>
          <ButtonUi className="btn-one" />
        </div>
        <div className="icons-home-parent position-relative d-flex justify-content-around">
          <IconOne />
          <IconTwo />
          <IconThree />
          <IconFour />
        </div>
        <div className="slider-image">
          <img src={image} alt={title} className="img-fluid" />
          <IconFive />

        </div>
      </div>
    </Carousel.Item>
  );

  render() {
    return (
      <>
        <WaveTop />
        <Carousel className="custom-carousel slider-bg">
          {slides.map(this.renderSlide)}
        </Carousel>
        <WaveBottom />
      </>
    );
  }
}

export default Home;
