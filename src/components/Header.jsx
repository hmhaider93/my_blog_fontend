import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#blog">My Blog</a></li>
          <li><a href="#portfolio">My Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
