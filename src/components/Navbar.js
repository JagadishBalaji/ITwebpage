import React from 'react';
import '../styles/Navbar.css';
import logo from '../Image/logo.png'; // Update the path to your logo image


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <h1>OWL SOLUTIONS</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
