import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Обо мне</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Привет! Я начинающий frontend-разработчик с желанием к созданию
              красивых и функциональных веб-приложений. Изучаю современные
              технологии и постоянно совершенствую свои навыки.
            </p>
            <p>
              В настоящее время занимаюсь изучением React, JavaScript и
              современных подходов к веб-разработке.
            </p>
          </div>
          <div className="about-image">
            <img
              src="public/images/profile.jpg"
              alt="Мое фото"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
