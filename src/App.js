import './App.css';
import fusionImage from './FUSION.png'
import aiDebateImage from './AIDebater.png'
import React, { useState } from 'react';



const StickyHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="sticky-header">
        <nav className="nav-bar">
          <div className="left">
            <a href="#home" className="home-link">Jerome Manarang</a>
          </div>
          <div className="right">
            <button className="connect-button" onClick={toggleSidebar}>
              Connect
            </button>
          </div>
        </nav>
      </header>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="https://linkedin.com/in/jerome-edward-pangan-manarang-422139265" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/jerome-manarang" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="mailto:your-email@example.com">Email</a></li>
        </ul>
      </aside>
      <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

function Main(){
  return(
  <div className ="title"> 
  <h1>Jerome Manarang</h1>
  <p className="subtitle">Software Developer based in Irvine, CA</p>
  </div>
  )
}

function Experience(){
  return(
  <section className="professional-experience">
    <h2>Professional Experience</h2>
    <div className="experience-container">
      <div className="experience-box">
        <img src={fusionImage} alt="Experience 1"/>
        <h3>FUSION ICS Project Director</h3>
        <p>As one of the ICS Project Directors for FUSION, I am in charge of the computer science field within our organization. Within my position, I am responsible for leading the FUSION ICS Project, which is a two-month hackathon-style competition where teams compete to complete a web application that encompasses the pillars of our organization. In doing so, I am in charge of creating applications/guides for members of FUSION, creating a curriculum for beginners that teaches them web application basics, and being a leader and advisor for those who join the competition.</p>
      </div>
      <div className="experience-box">
        <img src={aiDebateImage} alt="Experience 2"/>
        <h3>AI Debater</h3>
        <p>
This was a personal project of mine which allows a user to debate any topic against AI. I made this due to my own lack of debate skills, and felt that this would allow me and any one who uses it proper practice for any debates they may encounter. This was designed in a way for a user to choose who their opponent is. 
</p>
      </div>
      <div className="experience-box">
        <img src={fusionImage} alt="Experience 3"/>
        <h3>Search Engine</h3>
      </div>
    </div>
  </section>
  );
}





function App() {
  return (
    <div>
      <StickyHeader />
      <Main />
      <Experience />
   </div>
  
  );
}

export default App;
