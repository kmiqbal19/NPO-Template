import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Projects, Gallery, Contact, Donate } from "./Containers";
import { NavBar } from "./Components";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const App = () => {
  const location = useLocation();
  gsap.registerPlugin(ScrollTrigger);
  console.log(location);
  return (
    <div className="app">
      <NavBar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
