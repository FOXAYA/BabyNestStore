import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import myimg1 from "../assets/images/home-1.png";
import myimg2 from "../assets/images/home-2.png";
import myimg3 from "../assets/images/home-3.png";

import { motion } from "motion/react"


class Home extends Component {
  render() {
    const waveVariants = {
      start: {
        d: `
          M1920,0 
          C1800,40 1700,40 1600,25 
          C1500,10 1400,10 1300,20 
          C1200,30 1100,50 1000,50 
          C900,50 800,30 700,20 
          C600,10 500,10 400,25 
          C300,40 200,40 0,0 
          L0,80 
          L1920,80 
          Z
        `
      },
      wave: {
        d: `
          M1920,0 
          C1800,30 1700,50 1600,35 
          C1500,20 1400,5 1300,25 
          C1200,45 1100,60 1000,40 
          C900,20 800,10 700,30 
          C600,50 500,40 400,15 
          C300,30 200,50 0,0 
          L0,80 
          L1920,80 
          Z
        `
      }
    };
  
    return (
        <>
       <div className="waves d-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 80"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#F8F4EB"
          variants={waveVariants}
          initial="start"
          animate="wave"
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </svg>
  </div>

     <Carousel className="custom-carousel slider-bg  custom-height ">
          
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
              <img src={myimg1} alt="Collection 1" className="img-fluid d-block w-100" />
            </div>

          </div>
        </Carousel.Item>

        {/*  slide 2 */}
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center slider-content">
            <div className="slider-text">
              <h6>FOR ANY AGE & GENDER</h6>
              <h1>Kids' clothing of top quality</h1>
               <p>
                Explore the latest trends and find the perfect look for any
                occasion.
              </p>
              <Button variant="warning" className="shop-now-btn">
                Shop Now
              </Button>
            </div>
            <div className="slider-image">
              <img src={myimg2} alt="Collection 2" className="img-fluid d-block w-100" />
            </div>
            </div>
        </Carousel.Item>

        {/*  slide 3 */}
        <Carousel.Item>
          <div className="d-flex align-items-center justify-content-center slider-content">
            <div className="slider-text">
              <h6>FOR ANY AGE & GENDER</h6>
              <h1>A catalog of new clothing item</h1>
              <p>
                Check out our fresh arrivals and get the best deals on
                high-quality clothing.
              </p>
              <Button variant="warning" className="shop-now-btn">
                Shop Now
              </Button>
            </div>
            <div className="slider-image ">
              <img src={myimg3} alt="Collection 3" className="img-fluid d-block w-100" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      
      <div className="waves d-flex" style={{ transform: "scaleY(-1)" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 80"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#F8F4EB"
            variants={waveVariants}
            initial="start"
            animate="wave"
            transition={{
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      </>
    );
  }
}
export default Home;
