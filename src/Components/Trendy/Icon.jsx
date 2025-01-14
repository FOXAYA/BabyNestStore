import React from "react";
import styles from "../Styles/Icon.module.css";
import { WaveBottom, WaveTop } from "../animation/Wave";

export default function Icon() {
  return (
    <section className={styles.container}>
      {/* Top Wave Animation */}
      <WaveTop />

      <div className={styles.cont}>
        {/* First Feature */}
        <article className={styles.Fa}>
          <img
            src="https://img.icons8.com/ios/50/bag-diagonal-view.png"
            alt="Fast delivery icon"
            className={styles.icon}
          />
          <h3 className={styles.title}>Fast Delivery</h3>
          <p className={styles.desc}>
            Natus error sit voluptatem accusantium doloremque laudantium, totam rem.
          </p>
        </article>

        {/* Second Feature */}
        <article className={styles.Fa}>
          <img
            src="https://img.icons8.com/badges/48/romper.png"
            alt="Kids' clothing icon"
            className={styles.icon}
          />
          <h4 className={styles.title}>Kids’ Clothing</h4>
          <p className={styles.desc}>
            Natus error sit voluptatem accusantium doloremque laudantium, totam rem.
          </p>
        </article>

        {/* Third Feature */}
        <article className={styles.Fa}>
          <img
            src="https://img.icons8.com/ios/50/toy-train.png"
            alt="Toys & accessories icon"
            className={styles.icon}
          />
          <h4 className={styles.title}>Toys & Accessories</h4>
          <p className={styles.desc}>
            Natus error sit voluptatem accusantium doloremque laudantium, totam rem.
          </p>
        </article>
      </div>

      {/* Bottom Wave Animation */}
      <WaveBottom />
    </section>
  );
}
