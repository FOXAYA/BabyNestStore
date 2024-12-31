import React, { Component } from "react";
import { motion } from "framer-motion";

class Icons extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          background: "#f8f4eb",
        }}
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-5.svg"
            alt=""
          />
        </motion.div>

        <motion.div
          style={{ fontSize: "35px", color: "#c96f10" }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-5.svg"
            alt=""
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/vector.svg"
            alt=""
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-3.svg"
            alt=""
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-2.svg"
            alt=""
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-8.svg"
            alt=""
          />
        </motion.div>


        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-7.svg"
            alt=""
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-4.svg"
            alt=""
          />
        </motion.div>
        
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="33"
            height="34"
            src="https://childy.ancorathemes.com/wp-content/uploads/2023/10/anim-vector-4.svg"
            alt=""
          />
        </motion.div>
      </div>
    );
  }
}

export default Icons;
