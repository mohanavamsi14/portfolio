// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Resume from "./components/Resume.jsx";
import Certificate from "./components/Certificates.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certificates" element={<Certificate />} />
      </Routes>
    </Router>
  );
}
