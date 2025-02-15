import React from "react";
import '../ICSProjectDirector.css';
import { motion } from "framer-motion";
import fipcrew from '../images/FipCrew.JPG';
import fipteams from '../images/FIPTeams.jpg';

function ICSProjectDirector() {
  return (
    <motion.div 
      className="experience-title"
      initial={{ opacity: 0, y: -50 }}  // Start hidden and moved up
      animate={{ opacity: 1, y: 0 }}    // Fade in and move down
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
    >
      <h1>Information and Computer Science Project Director</h1>
      <p>As the project director, Jerome Manarang lead five teams in their project development.</p>
      
      <div className="image-container">
        <img src={fipcrew} alt="fip" className="fip-image-one"/>
        <img src={fipteams} alt="fipteams" className="fip-image-two"/>
      </div>
 
    </motion.div>



  );
}

export default ICSProjectDirector;