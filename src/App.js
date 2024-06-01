import React from 'react';
import Nav from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import nightsky from './LottieFiles/night-sky.json';
import Lottie from "lottie-react";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Lottie className="bg" animationData={nightsky} loop={true} />
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;