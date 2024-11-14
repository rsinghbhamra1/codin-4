import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./portfolio-components/Navbar";
import Home from "./portfolio-components/Home";
import Work from "./portfolio-components/Work";
const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Navbar />
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
