import React from "react";
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

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
        <Link to="/">About</Link>
        <Link to="/services">Services</Link>
        <div>Insurance</div>
        <div>Contact</div>
      </nav>
    </header>
  )
}

export default NavBar;