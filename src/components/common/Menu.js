import React from "react";
import UserMenu from "./UserMenu";
import { Link } from react-router-dom

const Menu = () => {
  return (
    <div className="main-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="aboutus.html" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="services.html" className="nav-link">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to="pricing.html" className="nav-link">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link to="contactus.html" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <UserMenu />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
