import React, { useState } from "react";
import "./navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav id="navbar" className="app__nav">
      <div className="app__nav-logo">
        <img src={logo} alt="main-logo" />
      </div>
      <ul className="app__nav-list">
        {["home", "projects", "gallery", "about", "contact"].map(
          (item, index) => {
            return (
              <li key={`nav-list-${item}-${index}`}>
                <div />
                <Link to={`/${item}`}>{item}</Link>
              </li>
            );
          }
        )}
      </ul>
      <div className="app__nav-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <AnimatePresence>
          {toggle && (
            <motion.div exit={{ x: [0, 700] }}>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "projects", "gallery", "about", "contact"].map(
                  (item, index) => {
                    return (
                      <li key={`nav-list-mobile-${item}-${index}`}>
                        <Link to={`/${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;
