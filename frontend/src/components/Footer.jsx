import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaGlobe, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-contact">
            <p>Email: mohammadovescontact@gmail.com</p>
            <p>Phone: +91 9983449941</p>
          </div>
          <div className="footer-text">
            <p>Designed & Developed by Mohammad Oves</p>
            <p className="copyright">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-right">
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
            <a href="mailto:mohammadovescontact@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;