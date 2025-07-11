import "@/styles/navigation/navbar.css";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        Sample Warehouse
      </a>
      <button 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        id="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul 
        className={`nav-links ${isOpen ? "active" : ""}`} 
        id="navLinks"
        onClick={() => setIsOpen(false)}
      >
        <li>
        <i className="fa-house"></i>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
