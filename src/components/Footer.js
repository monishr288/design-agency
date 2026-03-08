import React from 'react';
import { Linkedin, Mail, Phone, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DesignAgency</h3>
            <p>Creating beautiful digital experiences that help brands connect with their audience since 2024.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Branding</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/monish-r-640479301/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@designagencystudio@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+91 9025952561" aria-label="Phone">
                <Phone size={20} />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              <Mail size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              designagencystudio@gmail.com
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              <Phone size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              +91 9025952561
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} DesignAgency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;