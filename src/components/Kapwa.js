import React, { useRef } from "react";
import "../ICSProjectDirector.css";
import { motion, useInView } from "framer-motion";
import fipcrew from "../images/FipCrew.JPG";
import fipteams from "../images/FIPTeams.jpg";

function Kapwa() {
  // Reference for the description section
  const descriptionRef = useRef(null);
  const isDescriptionInView = useInView(descriptionRef, { once: true }); // Triggers only once when scrolled into view

  return (
    <div className="kapwa">
      {/* Title Section */}
      <motion.div
        className="experience-title"
        initial={{ opacity: 0, y: -50 }} // Start hidden and moved up
        animate={{ opacity: 1, y: 0 }} // Fade in and move down
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
      >
        <h1>Filipino Googler's Network</h1>
        <p>
          As a mentee, Jerome was mentored under software engineers from Google when developing projects. Alongside this,
          he also participated in code reviews under this position where he helped improve code cleanliness and functinality.
        </p>


      </motion.div>

      {/* Description Section (Scroll-Triggered Animation) */}
      <motion.div
        ref={descriptionRef} // Attach the ref for scroll detection
        className="description"
        initial={{ opacity: 0, y: 50 }} // Start hidden and moved down
        animate={isDescriptionInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
      >
        <p>
          Alongside his time as a mentee, he was able to recieve guidance and improvements on his projects such as "Ai Debator"
        </p>
        <h1>
          Collaborations: Filipino Googler's Network
          <h1> Jerome worked alongside his mentors in performing code reviews and proposal reviews to assist groups with understand how to approach their projects.
          </h1>
        </h1>
      </motion.div>
    </div>
  );
}

export default Kapwa;
