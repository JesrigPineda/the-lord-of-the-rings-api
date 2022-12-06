import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import Logo from "../../img/logo.png"

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-dark fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">
        <img className='logo' src={Logo} alt="Logo"/>  
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNab" aria-controls="navbarNab" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNab">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
