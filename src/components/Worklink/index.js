import React from "react";
import { Link } from "react-router-dom";


function Worklink(props) {
  return (
    <>
      <div className="col-md-4 col-12 worklink">
        <Link
              to={props.href}
              className={window.location.pathname === "/work/id" ? "nav-link active " : "nav-link"}
            >
          <img
            className="rounded prv img-fluid"
            src={props.src}
            alt={props.alt}
          />
          <div className="middle">
            <h3 className="worktitle">{props.title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Worklink;
