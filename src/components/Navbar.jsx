import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Menu */}
      <div className={`menu ${open ? "show" : ""}`}>
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/about" onClick={() => setOpen(false)}>About</a>
        <a href="/skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="/projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
}
