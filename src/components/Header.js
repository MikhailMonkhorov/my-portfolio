import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => (window.location.href = "/");

  return (
    <header className="header">
      <div className="container">
        <button onClick={handleHomeClick} className="logo">
          <h2>Михаил Монхоров</h2>
        </button>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
