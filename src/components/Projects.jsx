import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {/* Weather App */}
        <div className="project-card">
          <div className="project-icon"></div>
          <h3>Weather App</h3>
          <p>
            Flutter app that displays real-time weather using OpenWeather API
            with smooth animations, location access, and error handling.
          </p>
          <span className="project-tech">Flutter • API</span>
        </div>

        {/* Portfolio */}
        <div className="project-card">
          <div className="project-icon"></div>
          <h3>Portfolio Website</h3>
          <p>
            Multi-page responsive portfolio built using React with simple
            animations and project showcase links.
          </p>
          <span className="project-tech">React • CSS</span>
        </div>

        {/* E-Commerce */}
        <div className="project-card">
          <div className="project-icon"></div>
          <h3>E-Commerce Website(MyLocalSprout)</h3>
          <p>
            Connect farmers and consumers directly without middlemen,offering fresh products at fair prices
          </p>
          <span className="project-tech">React • Express</span>
        </div>
      </div>

      <a
        href="https://github.com/maha-codehub"
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        🔗 View on GitHub
      </a>
    </section>
  );
};

export default Projects;
