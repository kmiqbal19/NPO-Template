import React from "react";
import "./projectcomponent.scss";
import { urlFor } from "../../client";
import ReactPlayer from "react-player";
function Project({ project }) {
  return (
    <div className="project__container">
      <h3>{project.projectname}</h3>
      <div className="project__container--mid">
        <p>{project.projectdescription}</p>
        <img src={urlFor(project.imageurl)} alt="project-img" />
      </div>
      <div className="project__container--bottom">
        <ReactPlayer url={project.videolink} width="30vw" />
        <p>{project.videodesc}</p>
      </div>
    </div>
  );
}

export default Project;
