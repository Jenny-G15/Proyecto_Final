import React, { useState } from 'react';
import "../styles/home.css"
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
    // Aquí podrías manejar el envío del formulario
    console.log('Formulario enviado:', formData);
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-facebook">
              <path d="M22 12.078C22 5.39 16.065 0 9.142 0 4.09 0 0 4.48 0 9.748c0 4.067 2.63 7.505 6.154 8.695v-6.131H4.372V9.748h2.782V7.426c0-2.754 1.607-4.418 4.018-4.418 1.15 0 2.261.085 2.861.123v3.316h-1.963c-1.539 0-1.838.743-1.838 1.834v2.408h3.664l-.465 3.693H10.81v6.29C15.383 17.13 22 13.664 22 12.078z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-twitter">
              <path d="M23 3a10.4 10.4 0 01-2.828.775A5.1 5.1 0 0022.4 1.25a10.3 10.3 0 01-3.293 1.254A5.11 5.11 0 0016.525 0c-2.83 0-5.12 2.292-5.12 5.12 0 .4.038.792.107 1.17A14.548 14.548 0 011.668 3.211a5.098 5.098 0 001.582 6.837 5.05 5.05 0 01-2.317-.642v.062c0 2.48 1.77 4.556 4.115 5.03a5.044 5.044 0 01-2.308.086c.649 2.03 2.53 3.512 4.75 3.55a10.2 10.2 0 01-6.33 2.18c-.411 0-.815-.025-1.21-.072A14.53 14.53 0 008.7 21.558c9.14 0 14.2-7.565 14.2-14.118 0-.22-.005-.44-.014-.658A10.115 10.115 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-instagram">
              <path d="M12 2.163c3.206 0 3.585.012 4.85.07 1.099.058 1.835.25 2.265.433a4.499 4.499 0 011.573 1.573c.183.43.375 1.166.433 2.265.058 1.265.07 1.644.07 4.85s-.012 3.585-.07 4.85c-.058 1.099-.25 1.835-.433 2.265a4.499 4.499 0 01-1.573 1.573c-.43.183-1.166.375-2.265.433-1.265.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-1.099-.058-1.835-.25-2.265-.433a4.499 4.499 0 01-1.573-1.573c-.183-.43-.375-1.166-.433-2.265C2.175 15.038 2.163 14.758 2.163 12s.012-3.585.07-4.85c.058-1.099.25-1.835.433-2.265a4.499 4.499 0 011.573-1.573c.43-.183 1.166-.375 2.265-.433 1.265-.058 1.644-.07 4.85-.07zm0-2.163c-3.258 0-3.662.014-4.943.072-1.267.058-2.127.26-2.69.476a6.608 6.608 0 00-2.42 2.42c-.217.563-.418 1.423-.476 2.69-.058 1.281-.072 1.685-.072 4.943s.014 3.662.072 4.943c.058 1.267.26 2.127.476 2.69a6.608 6.608 0 002.42 2.42c.563.217 1.423.418 2.69.476 1.281.058 1.685.072 4.943.072s3.662-.014 4.943-.072c1.267-.058 2.127-.26 2.69-.476a6.608 6.608 0 002.42-2.42c.217-.563.418-1.423.476-2.69.058-1.281.072-1.685.072-4.943s-.014-3.662-.072-4.943c-.058-1.267-.26-2.127-.476-2.69a6.608 6.608 0 00-2.42-2.42c-.563-.217-1.423-.418-2.69-.476-1.281-.058-1.685-.072-4.943-.072zm0 6.393a3.607 3.607 0 11-.001 7.213A3.607 3.607 0 0112 8.353zm0 6.151a2.544 2.544 0 100-5.088 2.544 2.544 0 000 5.088zm4.764-6.263a.925.925 0 11-.001 1.85.925.925 0 010-1.85z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-linkedin">
              <path d="M20.452 20.452h-3.547v-5.847c0-1.391-.05-3.178-1.934-3.178-1.932 0-2.229 1.514-2.229 3.062v6.963h-3.553V8.578h3.405v1.568h.048c.475-.899 1.636-1.845 3.362-1.845 3.597 0 4.265 2.37 4.265 5.454v6.697h-.003zm-10.992-11.592c-1.239 0-2.237 1.027-2.237 2.297 0 1.273.998 2.298 2.237 2.298 1.238 0 2.237-1.025 2.237-2.298 0-1.269-.999-2.297-2.237-2.297zm1.767 13.701h-3.547v-8.097h3.547v8.097zm-6.553-10.541H2.537v11.015h3.548v-8.598c0-2.03 1.294-3.685 3.343-3.685 1.879 0 2.636 1.486 2.636 3.455v8.828h3.547v-9.692c0-4.779-2.571-6.661-5.375-6.661-2.507 0-3.712 1.388-4.373 2.436z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
