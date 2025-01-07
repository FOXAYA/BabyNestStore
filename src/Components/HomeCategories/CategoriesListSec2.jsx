import React from "react";
import styles from "./CategoriesListSec2.module.css";
import seet from "../assets/images/seet.jpeg";
import swim from "../assets/images/swim.jpeg";
import denim from "../assets/images/denim.jpeg";
import toys from "../assets/images/toys.jpeg";
import jacket from "../assets/images/jacket.jpeg";
import dress from "../assets/images/dress.jpeg";

const ItemShop = () => {
  const images = [
    { src: seet, alt: "Sweatshirts" },
    { src: swim, alt: "Swimsuits" },
    { src: toys, alt: "Toys" },
    { src: jacket, alt: "Jackets" },
    { src: denim, alt: "Denim" },
    { src: dress, alt: "Dresses" },
  ];

  return (
    <div className={styles.Container}>
      {images.map((image, index) => (
        <div key={index} className={styles.images}>
          <img src={image.src} alt={image.alt} className={styles.image} />
          <p className={styles.alt}>{image.alt}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemShop;
