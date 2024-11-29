import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';
import '../contact.css';
import animationData from '../Animation - 1726901945612 (1).json';
import Lottie from 'lottie-react';
const SERVICE_ID = 'service_e9lggb7';
const TEMPLATE_ID = 'template_ipeelnj';
const USER_ID = 'HH2nC6T9Uvvx80e0S';
const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const formData = new FormData(form);
    // const name = formData.get('name');
    // const email = formData.get('email');
    // const message = formData.get('message');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then((response) => {
        console.log('Message sent successfully!', response);
        setSuccessMessage('Message Sent Successfully');
        setShowModal(true); // Show the modal on success
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setSuccessMessage('Something went wrong!');
        setShowModal(true); // Show the modal on error
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-text">
            <h1>Get In Touch</h1>
            <p>Contact Us</p>
          </div>
          <div className="lottie-container">
            {/* <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{
                width: 750,
                height: 100,
                // marginTop: 10,
                // marginBottom: 10,
                // marginRight: 10,s
                // marginLeft: 10,
              }}
            /> */}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" name="name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" name="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>We are Professionals</h2>
            <p>Don’t hesitate to contact us for any kind of information</p>
            <ul>
  <li>
    <FaEnvelope /> Email: <a href="mailto:trivediharsh346@gmail.com">trivediharsh346@gmail.com</a>
  </li>
  <li>
    <FaPhoneAlt /> Phone: <a href="tel:+919106926166">+91 9106926166</a>
  </li>
</ul>
            <div className="social-icons">
    <a href="https://www.linkedin.com/in/harsh-trivedi-264277224/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://x.com/HarshTr57627270" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://github.com/Harsh-Trivedi78" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    
  </div>
          </div>
        </div>
        
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{successMessage}</h2>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;