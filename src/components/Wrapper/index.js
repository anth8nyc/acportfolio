import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper container-fluid">{props.children}</main>;
}

export default Wrapper;
