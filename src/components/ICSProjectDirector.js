import React, { useRef } from "react";
import "../ICSProjectDirector.css";
import { motion, useInView } from "framer-motion";
import fipcrew from "../images/FipCrew.JPG";
import fipteams from "../images/FIPTeams.jpg";
import cloudImage from '../images/cloud-removebg-preview.png';

function ICSProjectDirector() {
  // Reference for the description section
  const descriptionRef = useRef(null);
  const isDescriptionInView = useInView(descriptionRef, { once: true }); // Triggers only once when scrolled into view

  return (
    <div className="ics-project-director">
      {/* Title Section */}
      <motion.div
        className="experience-title"
        initial={{ opacity: 0, y: -50 }} // Start hidden and moved up
        animate={{ opacity: 1, y: 0 }} // Fade in and move down
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
      >
        <h1>Information and Computer Science Project Director</h1>
        <p>
          As the project director, Jerome Manarang led five teams in their
          project development.
        </p>

        <div className="image-container">
          <img src={fipcrew} alt="FIP Crew" className="fip-image-one" />
          <img src={fipteams} alt="FIP Teams" className="fip-image-two" />
        </div>
      </motion.div>

      {/* Description Section (Scroll-Triggered Animation) */}
      <motion.div
        ref={descriptionRef} // Attach the ref for scroll detection
        className="description"
        initial={{ opacity: 0, y: 50 }} // Start hidden and moved down
        animate={isDescriptionInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
      >
        <h1>
          Alongside his co-director, Benson Manzano, Jerome Manarang created the
          first-ever project with three goals: familiarizing beginners with
          full-stack development, providing more experience for those already
          skilled, and increasing engagement in Computer Science within their
          organization.
        
          Collaborations: Filipino Googler's Network
           Within this collaboration, software engineers from Google assisted Jerome Manarang in reviewing 
            project proposals and SRS documents from teams. 
          
        </h1>
      </motion.div>
      <div className="clouds">
        <img src={cloudImage} alt="cloud" className="cloud cloud1" />
        
        <img src={cloudImage} alt="cloud" className="cloud cloud3" />
        <img src={cloudImage} alt="cloud" className="cloud cloud4" />
        <img src={cloudImage} alt="cloud" className="cloud cloud5" />
        
        <img src={cloudImage} alt="cloud" className="cloud cloud7" />
        <img src={cloudImage} alt="cloud" className="cloud cloud8" />
      </div>
    </div>
  );
}

export default ICSProjectDirector;
