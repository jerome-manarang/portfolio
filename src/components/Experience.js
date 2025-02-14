import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "aos/dist/aos.css";
import "../Projects.css";
import AOS from "aos";
import cloudImage from "../images/cloud-removebg-preview.png";

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate(); // Hook for navigation

  const experience = [
    {
      title: "ICS Project Director",
      description: "Lead 5 teams developing a full-stack web application",
      route: "/ICSProjectDirector", // Internal route instead of an external link
    }
  ];

  return (
    <div className="container text-center">
      <h1 className="projects-title" data-aos="fade-down" data-aos-duration="1500">
        Experience
      </h1>
      <div className="projects-container row">
        {experience.map((project, index) => (
          <div 
            key={index} 
            className="col-12 col-md-6 mb-4" 
            data-aos="fade-up" 
            data-aos-delay={`${index * 200}`}
          >
            <div 
              className="cloud-project"
              onClick={() => navigate(project.route)} // Navigate to internal page
              style={{ cursor: "pointer" }} // Make it visually clickable
            >
              <img src={cloudImage} alt="cloud" className="cloud-image-exp img-fluid" />
              <div className="cloud-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
