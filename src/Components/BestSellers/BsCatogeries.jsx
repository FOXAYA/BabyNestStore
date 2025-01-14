import React from "react";
import "../Styles/HomeCategories.css";
import sweet from "../assets/images/product-category5.jpg";
import swim from "../assets/images/product-category6.jpg";
import toys from "../assets/images/product-category7.jpg";
import jackets from "../assets/images/product-category8.jpg";
import denim from "../assets/images/product-category9.jpg";
import dress from "../assets/images/product-category10.jpg";

const BsCatogeries = () => {
  const images = [
    { src: sweet , alt: "Sweatshirts" },
    { src: swim, alt: "Swimsuits" },
    { src: toys, alt: "Toys" },
    { src: jackets, alt: "Jackets" },
    { src: denim, alt: "Denim" },
    { src: dress, alt: "Dresses" },
  ];

  return (
    <div className="container d-flex gap-4 mt-5  h-c-sec-two">
      {images.map((image, index) => (
        <div key={index} className="images text-center ">
          <img src={image.src} alt={image.alt} className="image" />
          <p className="alt mt-2">{image.alt}</p>
        </div>
      ))}
    </div>
  );
};
export default BsCatogeries;
