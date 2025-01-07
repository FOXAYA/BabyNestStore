import React from "react";
import styles from "./City.module.css";
import { WaveTop } from "../animation/Wave";

const City = () => {
  const text = "the world fully";

  const animatedText = text.split("").map((char, index) => (
    <span key={index}>{char}</span>
  ));

  return (
    <>
      <WaveTop />
    <div className={styles.cityContainer}>
      
      <div className={styles.textCenter}>
        <h5>OUR PHILOSOPHY</h5>
        <h1 className={styles.fwBold}>
          Creating a multicultural and safe<br />
          environment for children to experience
        </h1>
        <div className={styles.container}>
          {animatedText}
        </div>
      </div>
      </div>
      
      </>
  );
};

export default City;
