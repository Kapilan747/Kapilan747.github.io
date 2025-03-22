import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiDatacamp } from "react-icons/si";
import "./About.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

const topRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.2 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const bottomRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
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
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Overlay */}
      <div className="about-overlay"></div>

      <div className="about-content-wrapper">
        {/* Left Box: About Me */}
        <motion.div
          className="about-box about-me"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>🚀 About Me</h2>
          <p>
            I'm Kapilan S D, a passionate problem solver and technology enthusiast who specializes in transforming data into meaningful insights.
            With a strong foundation in data engineering and software development, I craft efficient solutions that drive innovation and efficiency.

            My expertise lies in analyzing complex datasets, designing scalable systems, and building intelligent automation processes
            that enhance decision-making and streamline workflows. I have experience working with structured and unstructured data,
            optimizing database performance, and developing seamless integrations between systems.

            {/* Beyond data, I have a keen eye for **modern web development**, ensuring that applications are not only functional
            but also intuitive and user-friendly. I thrive on **solving intricate challenges, optimizing performance, and constantly exploring new technologies**
            to push boundaries and create impactful digital experiences. */}
          </p>


        </motion.div>

        <div className="about-right">
           <motion.div
            className="about-box academics"
            variants={topRightVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3>
              <FaGraduationCap className="academics-icon" /> Academics
            </h3>
            <p>
              B.Tech in Artificial Intelligence and Data Science<br />
              [Dr.N.G.P Institute of Technology], [IIIrd year]
            </p>
          </motion.div>

           <motion.div
            className="about-box coding-profiles"
            variants={bottomRightVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>💻 Coding Profiles</h2>
            <div className="profiles">
              <a href="https://leetcode.com/Kapilan_247" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="coding-icon leetcode" /> LeetCode
              </a>
              <a href="https://www.hackerrank.com/profile/Kapilan357" target="_blank" rel="noopener noreferrer">
                <SiHackerrank className="coding-icon hackerrank" /> HackerRank
              </a>
              <a href="https://www.datacamp.com/profile/KapilanSD" target="_blank" rel="noopener noreferrer">
                <SiDatacamp className="coding-icon datacamp" /> DataCamp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
