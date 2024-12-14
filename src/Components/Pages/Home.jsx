import React, { Component } from 'react'
import { Carousel, Button } from "react-bootstrap";
import myimg1 from "../assets/images/home1.png"
import myimg2 from "../assets/images/home2.png"

class Home extends Component {
  render() {
    return (
        <Carousel className="custom-carousel slider-bg">
        {/*  slide 1 */}
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center slider-content">
            <div className="slider-text">
              <h6>FOR ANY AGE & GENDER</h6>
              <h1>Find our new collection</h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia.
              </p>
              <Button variant="warning" className="shop-now-btn">
                Shop Now
              </Button>
            </div>
            <div className="slider-image">
              <img
                src={myimg1}
                alt="Collection 1"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>

        {/*  slide 2 */}
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center slider-content">
            <div className="slider-text">
              <h6>FOR ANY AGE & GENDER</h6>
              <h1>Kids clothing</h1>
              <h1>of top quality </h1>

              <p>
                Explore the latest trends and find the perfect look for any
                occasion.
              </p>
              <Button variant="warning" className="shop-now-btn">
                Shop Now
              </Button>
            </div>
            <div className="slider-image">
              <img
                src={myimg2}
                alt="Collection 2"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>

        {/*  slide 3 */}
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center slider-content">
            <div className="slider-text">
              <h6>FOR ANY AGE & GENDER</h6>
              <h1>New Arrivals Just for You</h1>
              <p>
                Check out our fresh arrivals and get the best deals on
                high-quality clothing.
              </p>
              <Button variant="warning" className="shop-now-btn">
                Shop Now
              </Button>
            </div>
            <div className="slider-image">
              <img
                src={myimg1}
                alt="Collection 3"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}
export default Home;