import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Team from "./routes/Team";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
