import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/aboutUs" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactUs" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-option">
            <div className="navbar-option-item">
              <a
                href="authentication.html"
                className="btn1 blue-gradient btn-with-image text-nowrap"
              >
                <i className="flaticon-login"></i>
                <i className="flaticon-login"></i>
                Sign Up / Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Menu;
