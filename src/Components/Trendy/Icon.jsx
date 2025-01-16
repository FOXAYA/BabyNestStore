import React from "react";
import "../Styles/Trendy.css";
 import { WaveBottom} from "../animation/Wave";
import img1 from "../assets/images/bag.png";
import img2 from "../assets/images/romper.png";
import img3 from "../assets/images/toy-train.png";

export default function Icon() {
  return (
    <section className="Icons">
      <div
        className="icon-container   d-flex flex-row align-items-center justify-content-around
gap-4"
      >
        {/* First Feature */}
        <article
          className="Fa d-flex flex-column gap-3
"
        >
          <img src={img1} alt="Fast delivery icon" className="icon" />
          <h3 className="title">Fast Delivery</h3>
          <p className="desc">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </article>

        {/* Second Feature */}
        <article className="Fa d-flex flex-column gap-3">
          <img src={img2} alt="Kids' clothing icon" className="icon" />
          <h4 className="title">Kids’ Clothing</h4>
          <p className="desc">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </article>

        {/* Third Feature */}
        <article
          className="Fa d-flex flex-column gap-3
"
        >
          <img src={img3} alt="Toys & accessories icon" className="icon" />
          <h4 className="title">Toys & Accessories</h4>
          <p className="desc">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </article>
      </div>

      <WaveBottom  className="wave-bottom"/>
    </section>
  );
}
