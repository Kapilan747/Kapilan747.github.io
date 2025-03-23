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

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Desktop Header */}
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
        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="sidebar-overlay show"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            ></motion.div>
            <motion.div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
              <button className="close-btn" onClick={toggleSidebar}>
                <FaTimes />
              </button>
              <nav className="sidebar-nav">
                <a href="#hero" onClick={toggleSidebar}>Home</a>
                <a href="#about" onClick={toggleSidebar}>About</a>
                <a href="#projects" onClick={toggleSidebar}>Projects</a>
                <a href="#skills" onClick={toggleSidebar}>Skills</a>
                <a href="#contact" onClick={toggleSidebar}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
