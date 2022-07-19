import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./statprojects.scss";
import { FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

function StatProjects() {
  const containerRef = useRef(null);
  const variants = {
    initial: {
      opacity: 0.9,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4,
        ease: "easeIn",
      },
    },
  };
  const childVariants = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      ref={containerRef}
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="statprojects__container"
    >
      <h1>PROJECTS ACCOMPLISHMENTS</h1>
      <motion.p variants={childVariants} className="statproject">
        <FaProjectDiagram /> 27 Food giving projects
      </motion.p>
      <motion.p variants={childVariants} className="statproject">
        <FaProjectDiagram /> 4 Job giving projects
      </motion.p>
      <motion.p variants={childVariants} className="statproject">
        <FaProjectDiagram /> 9 Anonymus charity giving
      </motion.p>
      <motion.p variants={childVariants} className="statproject">
        <FaProjectDiagram /> 11 Family helping projects
      </motion.p>
      <motion.p variants={childVariants} className="statproject">
        Total : 35 Projects
      </motion.p>
      <motion.p variants={childVariants} className="statproject">
        <span>Next Project:</span> Feeding Poor People (Budget: 500 Dollars
        only)
      </motion.p>
      <Link to="/projects">Learn More</Link>
    </motion.div>
  );
}

export default StatProjects;
