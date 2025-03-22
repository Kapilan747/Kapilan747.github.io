import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const headerVariants = {
  hidden: { scaleX: 0, opacity: 0, transformOrigin: "left" },
  visible: {
    scaleX: [0, 1.1, 1],
    opacity: [0, 1, 1],
    transition: { duration: 1, ease: "easeOut" },
  },
};

const sidebarVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <motion.header
        className="header"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <nav className="desktop-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
      </motion.header>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            ></motion.div>
            <motion.div
              className="sidebar"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button className="close-btn" onClick={() => setSidebarOpen(false)}>
                <FaTimes />
              </button>
              <nav className="sidebar-nav">
                <a href="#hero" onClick={() => setSidebarOpen(false)}>
                  Home
                </a>
                <a href="#about" onClick={() => setSidebarOpen(false)}>
                  About
                </a>
                <a href="#projects" onClick={() => setSidebarOpen(false)}>
                  Projects
                </a>
                <a href="#skills" onClick={() => setSidebarOpen(false)}>
                  Skills
                </a>
                <a href="#contact" onClick={() => setSidebarOpen(false)}>
                  Contact
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
