import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import "../styles/home.css";
import logo from '../img/logo.jpeg';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS
    //https://www.npmjs.com/package/emailjs
    //xcs4TCUIUkEEiDpMZ ID emailJs

    emailjs.send("service_456is9f", "template_okycsjp", formData, "xcs4TCUIUkEEiDpMZ")
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        resetForm();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo de la empresa" />
        </div>
        <div className="footer-contact">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Mensaje:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="footer-location">
          <h2>Ubicación</h2>
          <p>123 Calle Ficticia, Ciudad, País</p>
        </div>
        <div className="footer-social">
          <h2>Síguenos</h2>
          {/* Social media links */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NariCreaciones. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
