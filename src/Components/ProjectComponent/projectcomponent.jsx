import React from "react";
import "./projectcomponent.scss";
import { urlFor } from "../../client";
import ReactPlayer from "react-player";

import { BsFacebook } from "react-icons/bs";
import { motion } from "framer-motion";
function Project({ project, index }) {
  return (
    <div className="project__container">
      <motion.h3
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ delay: 0.2 }}
      >
        {`Project 0${index + 1}: `}
        {project.projectname}
      </motion.h3>
      <div className="project__container--mid">
        <motion.p
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ delay: 0.4 }}
        >
          {project.projectdescription}
        </motion.p>
        <motion.img
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ delay: 0.5 }}
          src={urlFor(project.imageurl)}
          alt="project-img"
        />
      </div>
      <div className="project__container--bottom">
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ delay: 0.2 }}
          className="project__container--bottom-video"
        >
          <div className="project__container--video-overlay">
            <img
              src="https://i.ibb.co/YQMJZ2H/237838738-109048231487732-6829085316391439066-n.jpg"
              alt=""
            />
            <a href="https://www.facebook.com/arrahamanfoundation">আর রাহমান</a>
            <a href={project.videolink}>Watch on Facebook</a>
            <BsFacebook />
          </div>
          <ReactPlayer
            url={process.env.PUBLIC_URL + `/videos/video-${index + 1}.mp4`}
            width="100%"
            height="100%"
            controls
            playing={true}
            playsinline={true}
          />
        </motion.div>
        <motion.p
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ delay: 0.4 }}
        >
          {project.videodesc}
        </motion.p>
      </div>
    </div>
  );
}

export default Project;
