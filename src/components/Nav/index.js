import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <nav className="navbar justify-content-md-between justify-content-center d-flex align-items-center pt-3">
       
        <div>
            <h1 className="mb-0 ml-3"> Anthony Castillo</h1>
        </div>
        
        <div>
        <Link
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active " : "nav-link"}
            >
              Work
            </Link>
        <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active " : "nav-link"}
            >
              About Me
            </Link>
        <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active " : "nav-link"}
            >
              Contact
            </Link>
        </div>
    </nav>
  );
}

export default Nav;
