import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">
          I am open to internships, collaborations, and learning opportunities.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>
              maha6095752@gmail.com
            </p>
          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/maha-lakshmi-saravanan"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/maha-lakshmi-saravanan
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/maha-codehub"
                target="_blank"
                rel="noreferrer"
              >
                github.com/maha-codehub
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>Karaikudi,TamilNadu,India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
