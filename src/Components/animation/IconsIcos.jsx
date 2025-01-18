import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon4 from "../assets/images/icon-4.svg";
import icon6 from "../assets/images/icon-6.svg";
import icon7 from "../assets/images/icon-7.svg";
import icon9 from "../assets/images/icon-9.svg";
import icon10 from "../assets/images/icon-10.svg";
import icon11 from "../assets/images/icon-1.svg";
import "../Styles/Animation.css";

// Define two arrays of icons
const groupOne = [icon1, icon3, icon2, icon9, icon11];
const groupTwo = [icon1, icon9, icon7, icon10, icon6, icon4];

// Define positions for each group
const positionsGroupOne = [
  { top: "10%", left: "40%" },
  { top: "30%", left: "50%" },
  { top: "50%", left: "50%" },
  { top: "70%", left: "90%" },
  { top: "70%", left: "40%" },
];

const positionsGroupTwo = [
  { top: "15%", left: "10%" },
  { top: "25%", left: "70%" },
  { top: "45%", left: "50%" },
  { top: "65%", left: "30%" },
  { top: "85%", left: "80%" },
  { top: "85%", left: "80%" },
];

// Animation settings for both groups
const animationSettings = {
  initial: { opacity: 1, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

const RandomIcons = ({ group }) => {
  // Conditionally select group based on the prop passed
  const groupToRender = group === "one" ? groupOne : groupTwo;
  const positionsToUse = group === "one" ? positionsGroupOne : positionsGroupTwo;

  return (
    <div className="icons-container">
      {groupToRender.map((icon, index) => (
        <motion.img
          key={`group-${group}-${index}`}
          src={icon}
          alt={`icon-${group}-${index + 1}`}
          className={`icon-${group}-${index}`}
          style={{
            position: "absolute",
            top: positionsToUse[index]?.top,
            left: positionsToUse[index]?.left,
          }}
          {...animationSettings}
        />
      ))}
    </div>
  );
};

export default RandomIcons;
