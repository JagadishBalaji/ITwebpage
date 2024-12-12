import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Media Section */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Address Section */}
      <div className="footer-address">
        <p><strong>Headquarters:</strong></p>
        <p>123 Main Street, Tech City, Country</p>
        <p><strong>Branch 1:</strong></p>
        <p>456 Maple Avenue, Innovation Town, Country</p>
        <p><strong>Branch 2:</strong></p>
        <p>789 Silicon Blvd, Startup Valley, Country</p>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 OWL Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
