import React from 'react';
import '../styles/Footer.css';
import linkedinIcon from '../img/social_12942307.png'; // Ruta al icono local

const Footer = () => {
  return (
    <footer className="footer">
      <p>Produced by Javier Gutierrez - Tel: +54 11 26502095</p>
      <a
        href="https://www.linkedin.com/in/javier-gutierrez-791891248/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          style={{ width: '2rem', height: '2rem' }} // Ajusta el tamaño del icono
        />
      </a>
    </footer>
  );
};

export default Footer;
