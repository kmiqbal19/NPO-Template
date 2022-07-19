import React from "react";
import "./foundersection.scss";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";
import founder from "../../Assets/founder.jpg";
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
function FounderSection() {
  return (
    <div className="founder__container">
      <div className="founder__text">
        <motion.p
          initial="initial"
          variants={variants}
          whileInView="animate"
          transition={{ duration: 0.5, type: "spring" }}
        >
          Through foundational academic and professional programs like ESL,
          civics education, workforce development, and more, we provide the
          tools adults need for long-term success. Through foundational academic
          and professional programs like ESL, civics education, workforce
          development, and more, we provide the tools adults need for long-term
          success.
        </motion.p>
        <Link to="/contact">
          Feel free to contact me <BsArrowUpRightSquare />
        </Link>
      </div>
      <div className="founder__img">
        <img src={founder} alt="founder-avatar" />
      </div>
    </div>
  );
}

export default FounderSection;
