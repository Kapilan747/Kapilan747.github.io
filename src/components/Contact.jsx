import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// Animations
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

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
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
      viewport={{ once: false, amount: 0.3 }} 
    >
      <motion.div className="contact-container">
        <motion.h2 variants={inputVariants}>Contact Me</motion.h2>
        <motion.p variants={inputVariants}>
          Feel free to drop a message or reach out via email.
        </motion.p>

        <motion.form ref={form} onSubmit={sendEmail} className="contact-form">
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            variants={inputVariants}
          />
          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            variants={inputVariants}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            variants={inputVariants}
          ></motion.textarea>

          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send Message
          </motion.button>
        </motion.form>

        {status && (
          <motion.p
            className="status-message"
            variants={messageVariants}
            initial="hidden"
            animate="visible"
          >
            {status}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
