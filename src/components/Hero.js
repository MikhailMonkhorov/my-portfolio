import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = ["Приветствую вас!", "Добро пожаловать!", "Hello World!"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % messages.length;
      const fullText = messages[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, messages, typingSpeed]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Начинающий Frontend Разработчик</h1>
          <div className="typing-container">
            <span className="typing-text">{text}</span>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Мои работы
            </a>
            <a href="#contact" className="btn btn-secondary">
              Связаться
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="resume.pdf"
              className="btn btn-primary"
            >
              📄 Скачать резюме
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-icon">{"</>"}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
