import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
  
            <li><Link to="/membership">Memberships</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <p><FaEnvelope /> Email: mohammadovescontact@gmail.com</p>
            <p>📞 Phone: +91 9983449941</p>
            <p>📍 Location: India</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="https://github.com/MohdOves" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mohammad-oves" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/mohd_oves_" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/MohdOves07" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://mohd-oves-portfolio.netlify.app" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed & Developed by Mohammad Oves</p>
        <p className="copyright">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;