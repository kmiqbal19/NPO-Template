import React, { useEffect, useRef } from "react";
import "./showwork.scss";
import Data from "./showworkData";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
function ShowWork() {
  const workRef = useRef(null);
 
  useEffect(() => {
    const works = document.querySelectorAll(".showwork__work");
    ScrollTrigger.matchMedia({
      all: function () {
        gsap.to(works, {
          scale: 1,
          duration: 0.5,
          ease: "ease",
          stagger: 0.3,
          scrollTrigger: {
            trigger: workRef.current,
            start: "10% center",
            end: "50% center",
            // markers: true,
            toggleActions: "play none none reset",
          },
        });
      },
      "(max-width:800px)": function () {
        gsap.to(works, {
          scale: 1,
          duration: 0.5,
          ease: "ease",
          stagger: 1,
          scrollTrigger: {
            trigger: workRef.current,
            start: "top center",
            end: "50% center",
            // markers: true,
            toggleActions: "play none none none",
          },
        });
      },
    });
  }, []);
  return (
    <div ref={workRef} className="showworks__container">
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
