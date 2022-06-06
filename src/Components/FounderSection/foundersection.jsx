import React from "react";
import "./foundersection.scss";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquare } from "react-icons/bs";
function FounderSection() {
  return (
    <div className="founder__container">
      <div className="founder__text">
        <p>
          Through foundational academic and professional programs like ESL,
          civics education, workforce development, and more, we provide the
          tools adults need for long-term success. Through foundational academic
          and professional programs like ESL, civics education, workforce
          development, and more, we provide the tools adults need for long-term
          success.
        </p>
        <Link to="/contact">
          Feel free to contact me <BsArrowUpRightSquare />
        </Link>
      </div>
      <div className="founder__img">
        <img
          src="https://i.ibb.co/Gsxn2PW/Whats-App-Image-2021-11-25-at-22-57-47.jpg"
          alt="founder-avatar"
        />
      </div>
    </div>
  );
}

export default FounderSection;
