import React from "react";
import Resume from "../components/images/Resume_A.CastilloC.pdf"

function Work() {
  return (
    <>
      <div className="row justify-content-around justify-content-md-start">
        <div className="titlecard col-md-2 col-10 p-3">
          <h2 id="contact">Contact</h2>
        </div>

        <div className="col-md-9 col-10 p-2 contentcard align-items-center justify-content-center mt-4">
          <div className="p-2 text-center">
            <a className="text-danger align-self-center" href="tel:4692009850">
              (469) 200-9850
            </a>{" "}
            |
            <a
              className="text-danger align-self-center"
              href="mailto:anthonycastillo821@gmail.com"
            >
              Email: anthonycastillo821@gmail.com
            </a>{" "}
            |
            <a
              className="text-danger align-self-center"
              target="_blank"
              rel="noopener noreferrer"
              href={Resume}
            >
              Resume
            </a>{" "}
            |
            <a
              className="text-danger align-self-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anthony-castillo-5b0631158/"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              className="text-danger align-self-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/anth8nyc"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
