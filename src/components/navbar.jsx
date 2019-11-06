import React from "react";
import logo from '../images/logo.png';

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
        <div>About</div>
        <div>Services</div>
        <div>Insurance</div>
        <div>Contact</div>
      </nav>
    </header>
  )
}

export default NavBar;