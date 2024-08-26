import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </footer>
  );
};

export default Footer;
