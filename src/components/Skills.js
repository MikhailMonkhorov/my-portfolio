import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 75 },
    { name: "JavaScript", level: 60 },
    { name: "React", level: 50 },
    { name: "Git", level: 50 },
    { name: "Responsive Design", level: 70 },
    { name: "Figma", level: 60 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Мои навыки</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
