import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
 // Make sure you have this CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="nav-brand">
        <p>FIT FUSSION</p>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
        <Link to="/blog" onClick={toggleMenu}>Blog</Link>
        <Link to="/membership" onClick={toggleMenu}>Membership</Link>
      </nav>
    </header>
  );
};

export default Navbar;