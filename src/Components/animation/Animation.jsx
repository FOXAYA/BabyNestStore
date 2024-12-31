import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; // FontAwesome Star icon
const AnimatedStar = () => {
  const starVariants = {
    rotate: {
      rotate: [0, 360], // Full rotation
      transition: {
        duration: 3, // 3 seconds for a full rotation
        repeat: Infinity, // Loop infinitely
        ease: "linear" // Smooth constant rotation
      }
    },
    pulse: {
      scale: [1, 1.5, 1], 
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float: {
      y: [0, -10, 0], 
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div style={{ position: "relative", height: "100px" }}>
      <motion.div
        variants={starVariants}
        initial="rotate"
        animate="rotate"
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "40px",
          color: "#FFD700"
        }}
      >
        <FaStar />
      </motion.div>

      {/* Pulsing Star */}
      <motion.div
        variants={starVariants}
        initial="pulse"
        animate="pulse"
        style={{
          position: "absolute",
          top: "70px",
          left: "30%",
          fontSize: "30px",
          color: "#FFD700"
        }}
      >
        <FaStar />
      </motion.div>

      {/* Floating Star */}
      <motion.div
        variants={starVariants}
        initial="float"
        animate="float"
        style={{
          position: "absolute",
          top: "100px",
          left: "70%",
          fontSize: "30px",
          color: "#FFD700"
        }}
      >
        <FaStar />
      </motion.div>
    </div>
  );
};

export default AnimatedStar;