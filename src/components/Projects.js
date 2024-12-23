import React, { useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../Projects.css"
import AOS from "aos";
import cloudImage from "../cloud-removebg-preview.png";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once when in view
    });
  }, []);

  const projects = [
    {
      title: "AI Debater",
      description: "Debate against AI and grow in your debate skills.",
      githubLink: "https://github.com/jerome-manarang/ai-debate",
    },
    {
      title: "Whim",
      description: "Organize your tasks and keep track of your tasks.",
      githubLink: "https://github.com/jerome-manarang/whim",
    },
  ];

  return (
    <div className="container text-center">
      <h1
        className="projects-title"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Projects
      </h1>
      <div className="projects-container row">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-12 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cloud-project"
            >
              <img
                src={cloudImage}
                alt="cloud"
                className="cloud-image img-fluid"
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

export default Projects;
