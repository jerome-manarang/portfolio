import './App.css';
import React from 'react';
import cloudImage from './cloud-removebg-preview.png';
import StickyHeader from './components/StickyHeader.js';
import Projects from './components/Projects.js';
import Buildings from './components/Building.js';

function Main() {
  return (
    <div className="title">
      <div className="clouds">
        <img src={cloudImage} alt="cloud" className="cloud cloud1" />
        
        <img src={cloudImage} alt="cloud" className="cloud cloud3" />
        <img src={cloudImage} alt="cloud" className="cloud cloud4" />
        <img src={cloudImage} alt="cloud" className="cloud cloud5" />
        
        <img src={cloudImage} alt="cloud" className="cloud cloud7" />
        <img src={cloudImage} alt="cloud" className="cloud cloud8" />
      </div>
      <h1>Jerome Manarang</h1>
      <p className="subtitle">Software Developer based in Irvine, CA</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <StickyHeader />
      <Main />
      <Projects /> 
      
    </div>
  );
}

export default App;
