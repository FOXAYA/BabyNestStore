import React, { Component } from "react";
import img1 from '../assets/images/client-1.webp';
import img2 from '../assets/images/client-2.webp';
import img3 from '../assets/images/client-3.webp';
import img4 from '../assets/images/client-4.webp';
import img5 from '../assets/images/client-5.webp';
import img6 from '../assets/images/client-6.webp';

class Clients extends Component {
  render() {
    const images = [img1, img2, img3, img4, img5, img6];
    return (
      <div className="d-flex justify-content-center py-6 clients-images w-100 gap-3 p-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${index + 1}`}
            className="client-img"
          />
        ))}
      </div>
    );
  }
}

export default Clients;
