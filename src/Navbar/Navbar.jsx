import React, { useState } from 'react';
import './Navbar.css';
import './Responsiv.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main">
        <div className="main_div1">
          <div className="logo">
            <h1 id="l1">MEDI</h1>
            <h1 id="l2">X</h1>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className={`main_div2 ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#" onClick={toggleMenu}>HOME</a></li>
            <li><a href="#" onClick={toggleMenu}>PAGES</a></li>
            <li><a href="#" onClick={toggleMenu}>TEAM</a></li>
            <li><a href="#" onClick={toggleMenu}>SERVICES</a></li>
            <li><a href="#" onClick={toggleMenu}>GALLERY</a></li>
            <li><a href="#" onClick={toggleMenu}>BLOG</a></li>
            <li><a href="#" onClick={toggleMenu}>CONTACT</a></li>
            <li><a href="#" onClick={toggleMenu}>APPOINTMENT</a></li>
          </ul>
        </div>
        <div className="main_div3">
          <div className="div3_div"><i className="fa-brands fa-facebook-f"></i></div>
          <div className="div3_div"><i className="fa-brands fa-twitter"></i></div>
          <div className="div3_div"><i className="fa-brands fa-google"></i></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;