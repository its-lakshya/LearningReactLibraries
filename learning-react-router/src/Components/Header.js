import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav >
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header