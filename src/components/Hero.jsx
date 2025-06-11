import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa"; 
import "./Hero.css";

const variants = {
  title: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -25 },
  },
  subtitle: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: 50 },
  },
  buttonsContainer: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
    exit: { opacity: 0, y: 40 },
  },
  button: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, y: 40 },
  },
  arrow: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, y: [0, 10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
    exit: { opacity: 0 },
  },
  socialLinks: {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 10, delay: 0.5 },
  },
  exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.5, ease: "easeInOut" },},}
};

const Hero = () => {
  const heroRef = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-overlay">
        <AnimatePresence>
          {inView && (
            <>
              <motion.h2 className="hero-title" variants={variants.title} initial="hidden" animate="visible" exit="exit">
                Hello, I'm <span>Kapilan S D</span>
              </motion.h2>
              <motion.p className="hero-subtitle" variants={variants.subtitle} initial="hidden" animate="visible" exit="exit">
                <Typewriter
                  words={[
                    "Crafting innovative data solutions.",
                    "Web Scraper.",
                    "Data Analyst.",
                    "Building scalable systems.",
                    "Data Engineer."
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </motion.p>
              <motion.div className="hero-buttons" variants={variants.buttonsContainer} initial="hidden" animate="visible" exit="exit">
                <motion.a href="#projects" className="hero-btn" variants={variants.button}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  See My Work
                </motion.a>
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1RBRvvij7vqfl_2lukt0AhivcJH8ttXvv"
                  className="hero-btn download-btn"
                  variants={variants.button}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Download Resume
                </motion.a>

              </motion.div>
              
              {/* Social Links */}
              <motion.div className="hero-socials" variants={variants.socialLinks} initial="hidden" animate="visible" exit="exit">
                <a href="https://www.linkedin.com/in/kapilanSD/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Kapilan747" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="#contact">
                  <FaEnvelope />
                </a>
                {/* <a href="https://leetcode.com/Kapilan_247/" target="_blank" rel="noopener noreferrer">
                  <FaCode />
                </a> */}
              </motion.div>

              <motion.div className="down-arrow" variants={variants.arrow} initial="hidden" animate="visible" exit="exit">
                &#x25BC;
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
