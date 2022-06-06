import React from "react";
import "./showwork.scss";
import Data from "./showworkData";
import { Link } from "react-router-dom";
function ShowWork() {
  return (
    <div className="showworks__container">
      <h1>OUR WORKS</h1>
      <div className="showwork">
        {Data.map((item, index) => {
          return (
            <div key={`data-showwork-${index}`} className="showwork__work">
              <img src={item.imgUrl} alt="work img" />
              <span>{item.title}</span>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
      <Link to="/projects">Learn More</Link>
    </div>
  );
}

export default ShowWork;
