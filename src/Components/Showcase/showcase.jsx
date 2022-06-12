import React from "react";
import "./showcase.scss";
import { motion } from "framer-motion";
const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
function Showcase() {
  return (
    <div className="showcase__container">
      <div className="showcase__text">
        <motion.p
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5, type: "spring" }}
        >
          <span>Lorem ipsum dolor sit ame</span> consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </motion.p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
      </div>
      <div className="showcase__img--container">
        <img
          src="https://i.ibb.co/2PFBxZD/Pngtree-human-nature-dna-and-genetic-3628254.png"
          alt="showcaseImg"
        />
      </div>
    </div>
  );
}

export default Showcase;
