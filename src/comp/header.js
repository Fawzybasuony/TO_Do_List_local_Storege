import React from "react";
import { NavLink } from "react-router-dom";
const Header = ( ) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded   ms-auto me-auto">
      <div className="container-fluid">
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="w-100  gap-5 navbar-nav d-flex justify-content-center">
            <li className="nav-item">
          <NavLink className="nav-link fs-2  text-dark" to="/">
          Home
        </NavLink> 
        </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-2 " to="/html">
                All Tasks
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
