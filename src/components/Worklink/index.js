import React from "react";

function Worklink(props) {
  return (
    <>
      <div className="col-md-4 col-12 worklink">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded prv img-fluid"
            src={props.src}
            alt={props.alt}
          />
          <div className="middle">
            <h3 className="worktitle">{props.title}</h3>
          </div>
        </a>
      </div>
    </>
  );
}

export default Worklink;
