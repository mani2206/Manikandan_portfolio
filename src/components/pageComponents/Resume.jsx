import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className="d-md-flex justify-content-around align-items-center content"
    >
      <div data-aos="fade-right">
        <h4>Resume</h4>
        <div className="line"></div>
        <div>
          I'm open to <span className="fw-bold">Job opportunities</span> where I can contribute, learn and grow.
          you can view <span  className="fw-bold">My Resume</span>
          <button className="btn btn-danger download_resume">
            <a
              href="../images/Manikandan_Developer_Resume.pdf"
              download="Manikandan_Developer_Resume.pdf"
              className="text-white"
            >
              Download
            </a>
          </button>
        </div>
      </div>
      <img
        data-aos="zoom-in"
        className=" resume_shadow"
        src={"../.././images/resume.jpg"}
        alt="React Image"
      />
    </div>
  );
}

export default Resume;
