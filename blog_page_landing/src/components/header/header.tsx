import './header.scss';
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.header__nav') && !(event.target as Element).closest('.header__hamburger')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__logo">Blogr</div>
      <button 
        className="header__hamburger" 
        onClick={toggleMenu} 
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✖' : '☰'}
      </button>
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="#product">Product</a>
            <ul className="header__submenu">
              <li><a href="#product1">Product 1</a></li>
              <li><a href="#product2">Product 2</a></li>
              <li><a href="#product3">Product 3</a></li>
            </ul>
          </li>
          <li className="header__menu-item">
            <a href="#company">Company</a>
            <ul className="header__submenu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </li>
          <li className="header__menu-item">
            <a href="#connect">Connect</a>
            <ul className="header__submenu">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="header__auth-buttons">
        <button className="header__login">Login</button>
        <button className="header__signup">Sign Up</button>
      </div>
    </header>
  );
};
