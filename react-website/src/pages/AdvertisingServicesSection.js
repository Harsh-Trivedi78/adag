import React from 'react';
import { FaBullhorn, FaLightbulb, FaPencilRuler, FaLaptopCode } from 'react-icons/fa';
import '../advertisingServices.css';

const AdvertisingServicesSection = () => {
  const services = [
    {
      title: 'Advertising Services',
      description: `We create innovative advertising campaigns and oversee their entire rollout, from initial market research to final execution, ensuring impactful results for your business.`,
      icon: <FaBullhorn className="icon" />,
    },
    {
      title: 'Consulting Services',
      description: `Our consulting services provide insights into new markets, product strategies, cost reduction techniques, and more to help your business grow sustainably.`,
      icon: <FaLightbulb className="icon" />,
    },
    {
      title: 'Design Services',
      description: `We help you develop a unique brand identity through stunning logos and promotional materials that ensure your business stands out in the market.`,
      icon: <FaPencilRuler className="icon" />,
    },
    {
      title: 'Digital Services',
      description: `Enhance your digital presence with our web development, app creation, and IT services, ensuring your business stays ahead in the digital age.`,
      icon: <FaLaptopCode className="icon" />,
    },
  ];

  return (
    <div className="advertising-services-section">
      <div className="about-section">
        <h1 className="about-title">Our Advertising Services</h1>
        <p className="about-description">
          We offer a full suite of advertising services to drive business growth, helping brands connect with their audience through innovative strategies and designs.
        </p>
      </div>
      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="icon-container">{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="cta-container">
        <p className="cta-text">
          Looking for expert advertising solutions? Partner with us for impactful campaigns that reach your goals!
        </p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </div>
    </div>
  );
};

export default AdvertisingServicesSection;
