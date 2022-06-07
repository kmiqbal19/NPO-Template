import React, { useEffect, useState } from "react";
import "./projects.scss";
import { Project } from "../../Components";
import { urlFor, client } from "../../client.js";
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const query = '*[_type == "projects"]';
      const res = await client.fetch(query);
      console.log(res);
      setProjects(res);
    };
    fetch();
  }, []);
  return (
    <div className="projects__container">
      <h1>Four types of projects</h1>
      {projects.map((project, index) => {
        return (
          <Project key={`project${index}`} project={project} index={index} />
        );
      })}
    </div>
  );
}

export default Projects;
