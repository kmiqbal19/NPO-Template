import React, { useEffect, useState } from "react";
import "./projects.scss";
import { Project, Footer } from "../../Components";
import { client } from "../../client.js";
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const query = '*[_type == "projects"]';
      const res = await client.fetch(query);

      setProjects(res);
      setLoading(false);
    };
    fetch();
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading__container">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="projects__container">
          <h1>Four types of projects</h1>
          <div className="projects__wrapper">
            {projects.map((project, index) => {
              return (
                <Project
                  key={`project${index}`}
                  project={project}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Projects;
