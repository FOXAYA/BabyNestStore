import React from "react";
import { motion } from "framer-motion";
import "../Styles/Animation.css";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon4 from "../assets/images/icon-4.svg";
import icon5 from "../assets/images/icon-5.svg";
import icon6 from "../assets/images/icon-6.svg";
import icon7 from "../assets/images/icon-7.svg";
import icon8 from "../assets/images/icon-8.svg";
import icon9 from "../assets/images/icon-9.svg";
import icon10 from "../assets/images/icon-10.svg";

const AnimatedIcon = ({ src, alt, animation, className }) => (
  <motion.div
    animate={animation}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <img
      src={src}
      alt={alt}
      className={className}
      width="33.16"
      height="34.641"
    />
  </motion.div>
);

const IconOne = ({ className }) => (
  <AnimatedIcon
    src={icon1}
    alt="Icon One"
    className={className}
    animation={{ x: [0, 10, 0] }}
  />
);

const IconTwo = ({ className }) => (
  <AnimatedIcon
    src={icon2}
    alt="Icon Two"
    className={className}
    animation={{ scale: [1, 1.5, 1] }}
  />
);

const IconThree = ({ className }) => (
  <AnimatedIcon
    src={icon3}
    alt="Icon Three"
    className={className}
    animation={{ y: [0, -20, 0] }}
  />
);

const IconFour = ({ className }) => (
  <AnimatedIcon
    src={icon4}
    alt="Icon Four"
    className={className}
    animation={{ x: [0, 10, 0] }}
  />
);

const IconFive = ({ className }) => (
  <AnimatedIcon
    src={icon5}
    alt="Icon Five"
    className={className}
    animation={{ x: [0, 10, 0] }}
  />
);

const IconSix = ({ className }) => (
  <AnimatedIcon
    src={icon6}
    alt="Icon Six"
    className={className}
    animation={{ x: [0, 10, 0] }}
  />
);

const IconSeven = ({ className }) => (
  <AnimatedIcon
    src={icon7}
    alt="Icon Seven"
    className={className}
    animation={{}} // Add animation if needed
  />
);

const IconEight = ({ className }) => (
  <AnimatedIcon
    src={icon8}
    alt="Icon Eight"
    className={className}
    animation={{ x: [0, 10, 0] }}
  />
);

const IconNine = ({ className }) => (
  <AnimatedIcon
    src={icon9}
    alt="Icon Nine"
    className={className}
    animation={{ x: [0, 10, 0] }}
  />
);

const IconTen = ({ className }) => (
  <AnimatedIcon
    src={icon10}
    alt="Icon Ten"
    className={className}
    animation={{ x: [0, 10, 0] }}
  />
);

export {
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
  IconFive,
  IconSix,
  IconSeven,
  IconEight,
  IconNine,
  IconTen,
};
