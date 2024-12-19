import React from "react";
import { motion } from "framer-motion";

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
    `,
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
    `,
  },
};

const WaveBottom = () => (
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
          ease: "easeInOut",
        }}
      />
    </svg>
  </div>
);

const WaveTop = () => (
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
          ease: "easeInOut",
        }}
      />
    </svg>
  </div>
);

export { WaveBottom, WaveTop };
