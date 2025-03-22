import React from "react";
import { motion } from "framer-motion";
import data from "../data";  
import "./Skills.css";  

const categoryOrder = [
  { label: "Programming Languages", type: "programming" },
  { label: "Web Development", type: "web-tech" },
  { label: "Server Side", type: "server-tech" },
  { label: "Databases", type: "database-tech" },
  { label: "Version Control & Management", type: "vc-tech" },
  { label: "Tools", type: "tools" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 id="tech-stack-title">Tech Stack</h2>
      <motion.div
        className="tech-stack"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="tech-stack-detail">
          {categoryOrder.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <p className="label-stack">{category.label}</p>
              <motion.div className="tech-row">
                {data.tech
                  .filter((tech) => tech.type === category.type)
                  .map((tech, i) => (
                    <motion.div
                      key={i}
                      className="tech"
                      transition={{ duration: 0.3 }}
                    >
                      <img src={tech.icon} alt={tech.name} className="tech-icon" />
                      <span className="tech-label">{tech.name}</span>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
