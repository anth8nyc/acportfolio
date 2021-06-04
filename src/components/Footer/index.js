import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer>
      <p>
        <a
          className="contactLinks align-self-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/anth8nyc"
          >
          anth8nyc
        </a>
        –  ©  –
        <Link to="/contact" className="contactLinks">contact</Link>
      </p>
    </footer>
  );
}

export default Footer;
