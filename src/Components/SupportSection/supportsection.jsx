import React from "react";
import "./supportsection.scss";
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
function SupportSection() {
  return (
    <div className="supportsection__container">
      <div className="support__volunteer">
        <p>Be Our Volunteer</p>
        <ul>
          <li>
            <BsCaretRightFill /> You can do this!
          </li>
          <li>
            <BsCaretRightFill /> You can do this!
          </li>
          <li>
            <BsCaretRightFill /> You can do this!
          </li>
        </ul>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="support__donate">
        <BiDonateHeart />

        <Link to="/donate">Donate</Link>
      </div>
    </div>
  );
}

export default SupportSection;
