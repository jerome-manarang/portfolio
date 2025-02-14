import React, { useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../Projects.css"
import AOS from "aos";
import cloudImage from "../images/cloud-removebg-preview.png";

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once when in view
    });
  }, []);

  const experience = [
    {
      title: "ICS Project Director",
      description: "Lead 5 teams developing a full-stack web application",
      Link: "https://github.com/jerome-manarang/ai-debate",
    }

  ];

  return (
    <div className="container text-center">
      <h1
        className="projects-title"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
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
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="cloud-project"
            >
              <img
                src={cloudImage}
                alt="cloud"
                className="cloud-image-exp img-fluid"
              />
              <div className="cloud-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience
