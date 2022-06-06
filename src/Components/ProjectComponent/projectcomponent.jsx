import React from "react";
import "./projectcomponent.scss";
import { urlFor } from "../../client";
import ReactPlayer from "react-player";

import { BsFacebook } from "react-icons/bs";
import video from "../../Assets/video-1.mp4";
function Project({ project }) {
  return (
    <div className="project__container">
      <h3>{project.projectname}</h3>
      <div className="project__container--mid">
        <p>{project.projectdescription}</p>
        <img src={urlFor(project.imageurl)} alt="project-img" />
      </div>
      <div className="project__container--bottom">
        <div className="project__container--bottom-video">
          <div className="project__container--video-overlay">
            <img
              src="https://i.ibb.co/YQMJZ2H/237838738-109048231487732-6829085316391439066-n.jpg"
              alt=""
            />
            <a href="https://www.facebook.com/arrahamanfoundation">আর রাহমান</a>
            <a href="#">Watch on Facebook</a>
            <BsFacebook style={{ color: "#1b74e4", fontSize: "1.4rem" }} />
          </div>
          <ReactPlayer
            url={video}
            width="100%"
            height="100%"
            autoPlay
            controls
          />
        </div>
        <p>{project.videodesc}</p>
      </div>
    </div>
  );
}

export default Project;
