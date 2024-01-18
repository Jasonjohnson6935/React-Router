import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Blue from './components/Blue';
import Red from './components/Red';
import Home from "./components/Home"
import Footer from "./components/footer"

function App() {

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
        <Footer />
      </div>
     );
}

export default App
