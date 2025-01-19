import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon6 from "../assets/images/icon-6.svg";
import icon7 from "../assets/images/icon-7.svg";
import icon9 from "../assets/images/icon-9.svg";
import icon10 from "../assets/images/icon-10.svg";
import icon11 from "../assets/images/icon-5.svg";
import icon12 from "../assets/images/icon-8.svg";
import icon13 from "../assets/images/icon-4.svg";


import "../Styles/Animation.css";

const groups = {
  one: {
    icons: [icon1, icon3, icon2, icon9, icon1],
    positions: [
      { top: "10%", left: "40%" },
      { top: "30%", left: "50%" },
      { top: "50%", left: "50%" },
      { top: "70%", left: "90%" },
      { top: "70%", left: "40%" },
    ],
  },
  two: {
    icons: [icon1, icon10, icon7, icon3, icon6, icon1],
    positions: [
      { top: "85%", left: "4%" },
      { top: "7%", left: "70%" },
      { top: "5%", left: "2%" },
      { top: "40%", left: "85%" },
      { top: "40%", left: "5%" },
      { top: "85%", left: "90%" },
    ],
  },
  three: {
    icons: [icon11, icon9, icon1, icon13, icon1, icon9, icon12, icon3],
    positions: [
      { top: "18%", left: "6%" },
      { top: "7%", left: "70%" },
      { top: "0%", left: "48%" },
      { top: "23%", left: "90%" },
      { top: "50%", left: "49%" },
      { top: "7%", left: "30%" },
      { top: "75%", left: "85%" },
      { top: "70%", left: "7%" },
    ],
  },
};

const animations = {
  swing: {
    initial: { opacity: 1, scale: 0.8, rotate: -10 },
    animate: { opacity: 1, scale: 1, rotate: 10 },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
  stretch: {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1.2 },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
  bounce: {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: -20 },
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut",
    },
  },
  zoom: {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1.2 },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
  slide: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut",
    },
  },
};

const getAnimation = (group, index) => {
  if (group === "three") return animations.bounce;

  const animationsList = [
    animations.swing,
    animations.stretch,
    animations.bounce,
    animations.zoom,
    animations.slide,
  ];
  return animationsList[index % animationsList.length];
};

const RandomIcons = ({ group }) => {
  const { icons, positions } = groups[group] || {};

  return (
    <div className="icons-container">
      {icons?.map((icon, index) => (
        <motion.img
          key={`icon-${group}-${index}`}
          src={icon}
          alt={`icon-${group}-${index + 1}`}
          className={`icon-${group}-${index}`}
          style={{
            position: "absolute",
            top: positions[index]?.top,
            left: positions[index]?.left,
          }}
          {...getAnimation(group, index)}
        />
      ))}
    </div>
  );
};

export default RandomIcons;
