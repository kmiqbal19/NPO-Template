import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./statprojects.scss";
import { FaProjectDiagram } from "react-icons/fa";
import { gsap } from "gsap";
function StatProjects() {
  const containerRef = useRef(null);
  useEffect(() => {
    const projects = document.querySelectorAll(".statproject");
    gsap.to(projects, {
      opacity: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% center",
        end: "10% center",

        toggleActions: "play none none reset",
      },
    });
  }, []);
  return (
    <div ref={containerRef} className="statprojects__container">
      <h1>PROJECTS ACCOMPLISHMENTS</h1>
      <p className="statproject">
        <FaProjectDiagram /> 27 Food giving projects
      </p>
      <p className="statproject">
        <FaProjectDiagram /> 4 Job giving projects
      </p>
      <p className="statproject">
        <FaProjectDiagram /> 9 Anonymus charity giving
      </p>
      <p className="statproject">
        <FaProjectDiagram /> 11 Family helping projects
      </p>
      <p className="statproject">Total : 35 Projects</p>
      <p className="statproject">
        <span>Next Project:</span> Feeding Poor People (Budget: 500 Dollars
        only)
      </p>
      <Link to="/projects">Learn More</Link>
    </div>
  );
}

export default StatProjects;
