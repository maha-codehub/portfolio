import React, { useState } from "react";
import "./About.css";

const cards = [
  {
    title: "About Me",
    content:
      "I am focused on developing my skills in new technologies. I enjoy building projects that solve real-world problems and improve user experience.",
  },
  {
    title: "Education",
    content:
      "BE Computer Science Engineering in Alagappa Chettiar Government College of Engineering and Technology ,Karaikudi (2024-2028)",
  },
  
];

const About = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? cards.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === cards.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="about-slider-section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="slider-container">
        <button className="nav-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="slide-card">
          <h3>{cards[index].title}</h3>

          {cards[index].content && (
            <p>{cards[index].content}</p>
          )}

          {cards[index].list && (
            <ul>
              {cards[index].list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default About;
