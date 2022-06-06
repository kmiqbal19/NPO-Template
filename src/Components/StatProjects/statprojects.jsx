import React from "react";
import { Link } from "react-router-dom";
import "./statprojects.scss";
function StatProjects() {
  return (
    <div className="statprojects__container">
      <h1>OUR PROJECTS</h1>
      <p>Project 01: Lorem Ipsum</p>
      <p>Project 01: Lorem Ipsum</p>
      <p>Project 01: Lorem Ipsum</p>
      <p>Project 01: Lorem Ipsum</p>
      <Link to="/projects">Learn More</Link>
    </div>
  );
}

export default StatProjects;
