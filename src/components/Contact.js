import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-card-background">
        <div className="contact-card">
          <div className="contact-info">
            <i className="fas fa-envelope icon"></i>
            <span>Get in touch</span>
            <span className="divider">|</span>
            <a href="mailto:lifewithryans@gmail.com" className="email-link">Email →</a>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a href="www.linkedin.com/in/ryan-smith-45ab76264" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin social-icon"></i>
        </a>
        <a href="https://github.com/RyanSmith19" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github social-icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
