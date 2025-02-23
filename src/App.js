import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import cloudImage from './images/cloud-removebg-preview.png';
import reactImage from './images/ReactCloud-removebg-preview.png';
import pythonImage from './images/PythonCloud-removebg-preview.png';
import javascriptImage from './images/JCloud-removebg-preview.png';
import mysqlImage from './images/mysqlCloud-removebg-preview.png';
import bootstrapImage from './images/bootstrapCloud-removebg-preview.png';
import cppImage from './images/cppCloud-removebg-preview.png';
import StickyHeader from './components/StickyHeader.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import ICSProjectDirector from './components/ICSProjectDirector.js';
import Kapwa from './components/Kapwa';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Main() {
  return (
    <div className="title">
      <div className="clouds">
        <img src={cppImage} alt="cloud" className="cloud cloud1" />
        
        <img src={mysqlImage} alt="cloud" className="cloud cloud3" />
        <img src={reactImage} alt="cloud" className="cloud cloud4" />
        <img src={bootstrapImage} alt="cloud" className="cloud cloud5" />
        
        <img src={pythonImage} alt="cloud" className="cloud cloud7" />
        <img src={javascriptImage} alt="cloud" className="cloud cloud8" />
      </div>
      <h1>Jerome Manarang</h1>
      <p className="subtitle">Software Developer based in Irvine, CA</p>
    </div>
  );
}



const BottomLottie = () => {
  return (
    <div style={{ width: "200%", textAlign: "center", marginTop: "50px" }}>
      <DotLottieReact
        src="https://lottie.host/10aef773-20c2-451f-843f-6402239d162a/KS4WvVHAS3.lottie"
        loop
        autoplay
        style={{ width: "300%", maxWidth: "1200px", height: "auto" }}
      />
    </div>
  );
};



function App() {
  return (
    <Router basename="/portfolio">
      <StickyHeader />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Projects />
            <Experience />
          </>
        } />
        <Route path="/ICSProjectDirector" element={<ICSProjectDirector />} />
        <Route path="/Kapwa" element={<Kapwa />} />
      </Routes>
    </Router>
  );
}

export default App;
