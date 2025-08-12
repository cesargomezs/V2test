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
          <a href="#home"><i className="fa-solid fa-house"></i> Home</a>
        </li>
        <li>
          <a href="#about"><i className="fa-solid fa-people-carry-box"></i> About</a>
        </li>
        <li>
          <a href="#dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</a>
        </li>
        <li>
          <a href="#services"><i className="fa-solid fa-barcode"></i> Services</a>
        </li>
        <li>
          <a href="#contact"><i className="fa-solid fa-address-card"></i> Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
