import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Ваше Имя. Все права защищены.</p>
          <div className="social-links">
            <a href="https://github.com/MikhailMonkhorov" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://t.me/MikhailMonkhorov" aria-label="Telegram">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
