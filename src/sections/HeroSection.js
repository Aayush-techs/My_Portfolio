import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/assets/profile.jpg" alt="profile" className="profile-pic" />
        <h1>Hi, I'm <span >Aayush Mishra</span></h1>
        <p className="tagline">Frontend Developer | Tech Enthusiast</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Contact Me</a>
          <a href="#skills" className="btn">My Skills</a>
        </div>
      <div className="social-links">
        <a href="https://github.com/Aayush-techs" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aayush-mishra-2a684734b/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:imaayush2005@gmail.com">Email</a>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
