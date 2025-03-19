import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./About.css";
// import profileImage from "../assets/profile.webp";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
  exit: { opacity: 0, x: -50, scale: 0.9, transition: { duration: 0.5 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const educationTitleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

const educationParagraphVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const About = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.section
      id="about"
      className="about-section"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      transition={{ duration: 0.8 }}
    >
      {/* Background overlay for clarity */}
      <div className="about-overlay"></div>
      
      {/* New box container wrapping all content */}
      <div className="about-box">
        {/* Optional Profile Image */}
        {/* <motion.div className="about-image" variants={imageVariants}>
          <img src={profileImage} alt="Kapilan" />
        </motion.div> */}
        <div className="about-text-container">
          <motion.h2 className="about-title" variants={titleVariants}>
            About Me
          </motion.h2>
          <motion.p className="about-paragraph" variants={paragraphVariants}>
            I'm Kapilan S D, a passionate data engineer and web designer who crafts immersive digital experiences.
            By merging innovative data solutions with modern design principles, I create interactive, scalable systems
            that delight users and drive results.
          </motion.p>
          <motion.div className="about-education">
            <motion.h3 variants={educationTitleVariants}>Education</motion.h3>
            <motion.p variants={educationParagraphVariants}>
              B.Tech in Artificial Intelligence and Data Science <br />
              [Dr.N.G.P Institute of Technology], [IIIrd year]
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
