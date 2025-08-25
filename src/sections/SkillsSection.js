import React from "react";
import "./SkillsSection.css";

const skills = ["HTML", "CSS", "JavaScript", "C Programming", "Java"];

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
