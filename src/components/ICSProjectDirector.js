import React from "react";
import '../ICSProjectDirector.css';
import { motion } from "framer-motion";

function ICSProjectDirector() {
  return (
    <motion.div 
      className="experience-title"
      initial={{ opacity: 0, y: -50 }}  // Start hidden and moved up
      animate={{ opacity: 1, y: 0 }}    // Fade in and move down
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
    >
      <h1>Information and Computer Science Project Director</h1>
    </motion.div>
  );
}

export default ICSProjectDirector;