// src/components/Contact.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <AnimatePresence>
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contact Me</h2>
          <p>Feel free to drop a message or reach out via email.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Contact;
