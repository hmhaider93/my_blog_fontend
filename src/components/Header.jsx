import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">My Blog</Link></li>
          <li><Link to="/portfolio">My Portfolio</Link></li>
          <li><Link to="/about">About Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
