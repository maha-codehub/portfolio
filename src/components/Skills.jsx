import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-wrapper">
        {/* Technical Skills */}
        <div className="skills-block">
          <h3 className="skills-subtitle">Technical Skills</h3>
          <div className="skills-list">
            <span>HTML, CSS, JavaScript</span>
            <span>React.js</span>
            <span>Node.js & Express (Basics)</span>
            <span>Git & GitHub</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-block">
          <h3 className="skills-subtitle">Soft Skills</h3>
          <div className="skills-list">
            <span>Time Management</span>
            <span>Team Collaboration</span>
            <span>Communication</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
