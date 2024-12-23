import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import myimg1 from "../assets/images/home-1.png";
import myimg2 from "../assets/images/home-2.png";
import myimg3 from "../assets/images/home-3.png";
import ButtonUi from "../ui/ButtonUi";
import { WaveBottom, WaveTop } from "../animation/Wave";
import Icons from "../Layout/IconsAnimated";

class Home extends Component {
  render() {
    return (
      <>
        <WaveTop />
        <Icons />
        <Carousel className="custom-carousel slider-bg">
          {/*  slide 1 */}
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center slider-content">
              <div className="slider-text">
                <h6>FOR ANY AGE & GENDER</h6>
                <h1 className="h1_home">
                  Find our new <br />
                  collection
                </h1>
                <p className="lead fs-6 p_home">
                  Shop the best outfits for playtime, school, or special
                  moments.
                </p>
                <ButtonUi />
              </div>
              <div className="slider-image">
                <img src={myimg1} alt="Collection 1" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>

          {/*  slide 2 */}
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center slider-content">
              <div className="slider-text">
                <h6>DESIGNED FOR ALL AGES</h6>
                <h1 className="h1_home">
                  Discover our latest <br />
                  kids' collections
                </h1>
                <p className="lead fs-6 p_home">
                  High-quality, stylish, and fun essentials your little ones
                  will love.
                </p>
                <ButtonUi />
              </div>
              <div className="slider-image">
                <img src={myimg2} alt="Collection 2" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>

          {/*  slide 3 */}
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center slider-content">
              <div className="slider-text">
                <h6>FOR ANY AGE & GENDER</h6>
                <h1 className="h1_home">
                  A catalog of new <br />
                  clothing item
                </h1>
                <p className="lead fs-6 p_home">
                  Check out our fresh arrivals and get the best deals on
                  high-quality clothing.
                </p>
                <ButtonUi />
              </div>
              <div className="slider-image">
                <img src={myimg3} alt="Collection 2" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <WaveBottom />
      </>
    );
  }
}
export default Home;
