import React from "react";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets//bootstrap/css/style.css";
import "../../assets/font-awesome/css/all.css";
import "../../assets/font-awesome/css/fontawesome.css";
import "../../assets/font-awesome/css/brands.css";
import "../../assets/font-awesome/css/solid.css";
import "../../assets/font-awesome/js/all.js";
import "../../assets/font-awesome/js/brands.js";
import "../../assets/font-awesome/js/solid.js";
import "../../assets/font-awesome/js/fontawesome.js";

const Navbar = () => {
  return (
    <div>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark "
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            My Team Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto text-light">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#team">
                Team
              </a>
              <a className="nav-link" href="#jobdesc">
                Job Description
              </a>
              <a
                className="btn btn-primary button"
                href="#contact"
                tabIndex={-1}
                aria-disabled="true"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="parallax" className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
            Welcome to <span>Group 8</span>
            <br />
            Experiment <span>Website</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
