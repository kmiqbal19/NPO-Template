import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Projects, Gallery, Contact, Donate } from "./Containers";
import { SingleProject, NavBar } from "./Components";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
};

export default App;
