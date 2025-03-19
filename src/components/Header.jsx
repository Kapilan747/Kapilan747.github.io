import React from "react";
import { motion } from "framer-motion";
import "./Header.css"; // Ensure you have appropriate CSS

const headerVariants = {
  hidden: { scaleX: 0, opacity: 0, transformOrigin: "left" },
  visible: {
    scaleX: [0, 1.1, 1],
    opacity: [0, 1, 1],
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Header = () => {
  return (
    <motion.header
      className="header"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;
