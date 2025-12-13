import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const fullName = "Mahalakshmi";
  const [typedName, setTypedName] = useState("");


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        
        <div className="home-left fade-in-left">
          <h1 className="home-title">
            Hi, I’m <span className="typing">{typedName}</span>
          </h1>

          <p className="home-subtitle">
            A <strong>passionate student developer</strong> who loves building real-world web and mobile applications. I enjoy solving problems, learning modern technologies, and turning ideas into clean, user-friendly products.
          </p>

          <p className="home-tagline">
            Driven by curiosity, consistency, and hands-on projects.
          </p>

          <div className="home-interests">
            <span>Web Development</span>
            <span>Mobile App Development</span>
            <span>Problem Solving</span>
          </div>

          <blockquote className="home-quote">
            “Learning never exhausts the mind.”
          </blockquote>

          <div className="home-socials">
            <a href="https://github.com/maha-codehub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/maha-lakshmi-saravanan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        
        <div className="home-right fade-in-right">
          <img
            src="/profile.jpeg" 
            alt="Mahalakshmi"
            className="home-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
