// src/pages/Contact.js
import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us.</p>
        <div className="contact-info">
          <p><strong>Segura Mgmt Services, LLC</strong></p>
          <p>1307 Tool Dr. New Iberia, LA 70560</p>
          <p>Phone: 337-241-3645</p>
          <p>Email: <a href="mailto:brennen@seguramgmt.com">brennen@seguramgmt.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
