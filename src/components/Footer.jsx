import React from "react";
import { motion } from "framer-motion";
import "./Footer.css"

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2025 Kapilan S D | All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer;
