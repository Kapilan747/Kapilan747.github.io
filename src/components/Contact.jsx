import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Contact.css";

 const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};
const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};
const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

     if (!name || !email || !message) {
      setStatus("⚠️ All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("⚠️ Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_534vqso", 
        "template_7wdhwfq", 
        form.current,
        "Nk082qpRJDe8BHhRu"  
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
          setLoading(false);
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="social-connect" variants={socialVariants}>
        <h3>Connect with Me</h3>
        <p>Find me on these platforms:</p>
        <div className="social-grid">
          <a
            href="https://github.com/Kapilan747"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaGithub className="social-icon" />
            <span>GitHub</span>
          </a>

          <a
            href="https://leetcode.com/Kapilan_247"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <SiLeetcode className="social-icon" />
            <span>LeetCode</span>
          </a>

          <a
            href="https://www.linkedin.com/in/KapilanSD/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaLinkedin className="social-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/917397549626"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FaWhatsapp className="social-icon" />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:Kapilansd4@gmail.com"
            className="social-card"
          >
            <FaEnvelope className="social-icon" />
            <span>Gmail</span>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
