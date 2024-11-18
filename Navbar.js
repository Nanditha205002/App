// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Trending</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/market-overview">Market Overview</Link>
      <Link to="/news">News</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;
