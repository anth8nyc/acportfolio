import React from "react";
import Resume from "../components/images/AnthonyCastillo.resume.pdf"

function Contact() {
  return (
    <>
      <div className="row justify-content-around justify-content-md-center">
        <div className="titlecard col-md-2 col-10 p-3">
          <h2 id="contact">Contact</h2>
        </div>

        <div className="col-md-9 col-10 p-2 contentcard align-items-center justify-content-center mt-4">
          <div className="p-2 text-center">
            <a className="contactLinks align-self-center" href="tel:4692009850">
              (469) 200-9850
            </a>{" "}
            |
            <a
              className="contactLinks align-self-center"
              href="mailto:anthonycastillo821@gmail.com"
            >
              Email: anthonycastillo821@gmail.com
            </a>{" "}
            |
            <a
              className="contactLinks align-self-center"
              target="_blank"
              rel="noopener noreferrer"
              href={Resume}
            >
              Resume
            </a>{" "}
            |
            <a
              className="contactLinks align-self-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anth8nyc/"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              className="contactLinks align-self-center"
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

export default Contact;
