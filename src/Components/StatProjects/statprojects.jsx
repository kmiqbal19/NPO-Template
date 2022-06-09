import React from "react";
import { Link } from "react-router-dom";
import "./statprojects.scss";
import { FaProjectDiagram } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

function StatProjects() {
  return (
    <div className="statprojects__container">
      <h1>PROJECTS ACCOMPLISHMENTS</h1>
      <p>
        <FaProjectDiagram /> 27 Food giving projects
      </p>
      <p>
        <FaProjectDiagram /> 4 Job giving projects
      </p>
      <p>
        <FaProjectDiagram /> 9 Anonymus charity giving
      </p>
      <p>
        <FaProjectDiagram /> 11 Family helping projects
      </p>
      <p>Total : 35 Projects</p>
      <p>
        <span>Next Project:</span> Feeding Poor People (Budget: 500 Dollars
        only)
      </p>
      <Link to="/projects">Learn More</Link>
    </div>
  );
}

export default StatProjects;
