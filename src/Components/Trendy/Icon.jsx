import React from "react";
import styles from "../Styles/Icon.module.css";
import { WaveBottom, WaveTop } from "../animation/Wave";

export default function Icon() {
  return (
    <div className={styles.container}>
      <WaveTop />
      <div className={styles.cont}>
        <div className={styles.Fa}>
          <img
            src="https://img.icons8.com/ios/50/bag-diagonal-view.png"
            alt="bag-diagonal-view"
            width="100"
            height="100"
          />
          <h3 className={styles.title}>Fast delivery</h3>
          <p className={styles.desc}>
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </div>
        <div className={styles.Fa}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/badges/48/romper.png"
            alt="romper"
          />
          <h4 className={styles.title}>Kids’ clothing</h4>
          <p className={styles.desc}>
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </div>
        <div className={styles.Fa}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/50/toy-train.png"
            alt="toy-train"
          />
          <h4 className={styles.title}>Toys & accessories</h4>
          <p className={styles.desc}>
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </div>
      </div>
      <WaveBottom  />
    </div>
  );
}
