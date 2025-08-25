import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        Hi, I'm <span className="highlight">Aayush Mishra</span>, a{" "}
        <span>2nd year B.Tech student</span> in{" "}
        <span className="highlight">Computer Science & Engineering (Blockchain)</span> 
        at Samrat Ashok Technological Institute, Vidisha.
      </p>

      <p className="about-text">
        I am passionate about <span className="highlight">Frontend Development</span> 
        and enjoy building responsive, creative, and user-friendly web applications. 
        I am skilled in <span className="highlight">HTML, CSS, JavaScript</span>, and 
        currently learning <span className="highlight">ReactJS</span> to make modern web apps.
      </p>

      <p className="about-text">
        Apart from web development, I also have a good foundation in{" "}
        <span className="highlight">C programming</span>, which helps me in problem-solving 
        and understanding core computer science concepts.
      </p>

      <p className="about-text">
        My goal is to grow as a developer by sharpening my skills, 
        learning new technologies, and working on projects that combine 
        creativity with innovation. 
      </p>
    </section>
  );
};

export default AboutSection;
