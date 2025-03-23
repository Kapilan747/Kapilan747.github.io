import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
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

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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
      <motion.div className="contact-container">
        <motion.h2 variants={inputVariants}>Contact Me</motion.h2>
        <motion.p variants={inputVariants}>
          Feel free to drop a message or reach out via email.
        </motion.p>

        <motion.form ref={form} onSubmit={sendEmail} className="contact-form">
          <motion.input
            type="text"
            name="from_name"  
            placeholder="Your Name"
            required
            variants={inputVariants}
          />
          <motion.input
            type="email"
            name="from_email"  
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
            disabled={loading}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {loading ? "Sending..." : "Send Message"}
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
