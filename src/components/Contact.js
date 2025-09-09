import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь можно добавить отправку формы
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Свяжитесь со мной</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Давайте работать вместе!</h3>
            <p>Я открыт для новых возможностей и проектов.</p>
            <div className="contact-details">
              <p>Email: mikhailmonkhorov@gmail.com</p>
              <p>Телефон: +7 (914) 263-70-04</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
