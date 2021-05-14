import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="main-nav" id="main-nav">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            News
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Conatct
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
