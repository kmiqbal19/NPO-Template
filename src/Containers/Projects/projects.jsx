import React, { useEffect, useState } from "react";
import "./projects.scss";
import { Project, Footer } from "../../Components";
import { client } from "../../client.js";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "1rem",
              background: "none",
              display: "block",
              shapeRendering: "auto",
            }}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="30" cy="50" fill="#93dbe9" r="20">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="-0.5s"
              ></animate>
            </circle>
            <circle cx="70" cy="50" fill="#689cc5" r="20">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="0s"
              ></animate>
            </circle>
            <circle cx="30" cy="50" fill="#93dbe9" r="20">
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="-0.5s"
              ></animate>
              <animate
                attributeName="fill-opacity"
                values="0;0;1;1"
                calcMode="discrete"
                keyTimes="0;0.499;0.5;1"
                dur="1s"
                repeatCount="indefinite"
              ></animate>
            </circle>
          </svg>
          <span>Loading.....</span>
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
