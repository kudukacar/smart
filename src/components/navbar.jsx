import React from "react";
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <header className="nav">
      <nav className="leftnav">
        <img src={logo} alt="home physical therapy" />
        <div>
          Smart Moves Physical Therapy
        </div>
      </nav>
      <nav className="rightnav">
        <NavLink exact activeClassName="selected" to="/">About</NavLink>
        <NavLink activeClassName="selected" to="/services">Services</NavLink>
        <NavLink activeClassName="selected" to="/insurance">Insurance</NavLink>
        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default NavBar;