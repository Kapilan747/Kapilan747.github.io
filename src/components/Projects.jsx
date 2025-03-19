// src/components/Projects.jsx
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Covid Analysis",
    description:
      "Comprehensive analysis of the COVID-19 pandemic, aimed at uncovering trends, insights, and important findings from WHO publicly available datasets.",
    image: "./assets/covid.jpg",
    link: "#",
    techUsed: "Python, Pandas, Matplotlib, Seaborn",
    github: "https://github.com/yourusername/covid-analysis",
  },
  {
    title: "Nobel Prize Analysis",
    description:
      "Nobel Prize data to identify trends in gender, birth countries, and prize distribution over time. Key insights include top categories, peak decades, and female representation.",
    image: "./assets/nobel.webp",
    link: "#",
    techUsed: "Python, Pandas, Plotly",
    github: "https://github.com/yourusername/nobel-prize-analysis",
  },
  {
    title: "Flight Weather Delay Analysis",
    description:
      "Analysis of the relationship between wind speed and flight departure delays. The project groups flights based on wind speed and examines weather impacts on departure times.",
    image: "./assets/flight.jpg",
    link: "#",
    techUsed: "Python, Pandas, Scikit-learn, Seaborn",
    github: "https://github.com/yourusername/flight-weather-delay",
  },
];

const timelineContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const timelineItemVariantsLeft = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 12, duration: 1 },
  },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

const timelineItemVariantsRight = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 12, duration: 1 },
  },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const Projects = () => {
  const sectionRef = useRef(null);

  return (
    <AnimatePresence>
      <motion.section
        id="projects"
        className="projects-section"
        ref={sectionRef}
        variants={timelineContainerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="timeline">
          {projects.map((proj, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`timeline-item ${isEven ? "left" : "right"}`}
                variants={isEven ? timelineItemVariantsLeft : timelineItemVariantsRight}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="timeline-content">
                  <div className="card-bg">
                    <img src={proj.image} alt={proj.title} />
                  </div>
                  <motion.div className="card-overlay" whileHover={{}}>
                    <h3 className="card-title">{proj.title}</h3>
                    <motion.div
                      className="card-info"
                      initial={{ opacity: 0, x: 50 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="card-desc">{proj.description}</p>
                      <p className="tech-used">
                        <strong>Tech Used:</strong> {proj.techUsed}
                      </p>
                      <a href={proj.github} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Projects;
