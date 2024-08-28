import logo from './logo.svg';
import './App.css';

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

function Body(){
  return(
  <h1> Jerome Manarang</h1>
  )
}



function App() {
  return (
    <div>
      <StickyHeader />
   </div>
  
  );
}

export default App;
