// Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from '../Services.module.css'; // Adjust the import as per your file structure

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Creating responsive and high-performance websites.',
      moreInfo: `
        Our web development team specializes in creating tailored web solutions. 
        We focus on delivering responsive, user-friendly, and optimized websites that cater to your business goals.
        - **Technologies Used**: React, Node.js, and various CMS platforms.
        - **Key Features**: E-commerce integration, SEO optimization, and performance enhancements.
        - **Client Success**: We've helped numerous businesses increase their online presence and sales through effective web development strategies.
      `,
      link: '/WebDevelopmentSection' // Unique link for Web Development
    },
    {
      icon: '🎨',
      title: 'Creative Advertising',
      description: 'Crafting unique advertising solutions for brands.',
      moreInfo: `
        We develop creative advertising campaigns that resonate with your target audience. 
        Our strategies blend innovation with data-driven insights to maximize engagement and conversion.
        - **Campaign Types**: Digital, print, and social media.
        - **Creative Process**: Idea generation, content creation, and performance analysis.
        - **Case Studies**: Our campaigns have successfully increased brand awareness and customer loyalty for various clients.
      `,
      link: '/CreativeAdvertisingSection' // Unique link for Creative Advertising
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Boosting your online presence and engagement.',
      moreInfo: `
        Our digital marketing services encompass SEO, social media marketing, and PPC campaigns designed to enhance your online visibility.
        - **SEO Strategies**: Keyword research, on-page optimization, and link building.
        - **Social Media**: Content creation, community management, and advertising.
        - **Results Tracking**: Regular reporting to monitor performance and make data-driven adjustments.
      `,
      link: '/DigitalMarketingSection' // Unique link for Digital Marketing
    },
   
    {
      icon: '📢',
      title: 'Advertising Services',
      description: 'Effective strategies for advertising campaigns.',
      moreInfo: `
        Our advertising services focus on crafting targeted campaigns across various platforms.
        - **Platforms**: Google Ads, Facebook, Instagram, and more.
        - **Strategy Development**: Audience segmentation, ad creative, and testing methodologies.
        - **Outcomes**: Increased conversion rates and return on investment for our clients.
      `,
      link: '/AdvertisingServicesSection' // Unique link for Advertising Services
    }, {
      icon: '✨',
      title: 'Branding',
      description: 'Building brand identity and recognition.',
      moreInfo: `
        We help businesses establish a strong brand identity through comprehensive branding strategies.
        - **Services Offered**: Logo design, brand guidelines, and messaging frameworks.
        - **Branding Process**: Research, design iterations, and client feedback loops.
        - **Impact**: Our clients have successfully increased recognition and customer trust through strong branding.
      `,
      link: '/Branding' // Unique link for Branding
    },
    {
      icon: '📋',
      title: 'Consulting Services',
      description: 'Expert consulting to help grow your business.',
      moreInfo: `
        Our consulting team offers expert advice to help you navigate business challenges.
        - **Areas of Focus**: Business strategy, market analysis, and operational efficiency.
        - **Approach**: Collaborative workshops and tailored action plans.
        - **Client Success**: We have helped clients streamline operations and improve profitability.
      `,
      link: '/ConsultancyComponent' // Unique link for Consulting Services
    },
    {
      icon: '🖌️',
      title: 'Design Services',
      description: 'Designing stunning visuals and graphics.',
      moreInfo: `
        We create visually appealing designs for your marketing materials.
        - **Design Types**: Brochures, social media graphics, and website visuals.
        - **Design Process**: Concept development, design execution, and revisions.
        - **Client Testimonials**: Our design work has received praise for creativity and effectiveness.
      `,
      link: '/DesignServicesComponent' // Unique link for Design Services
    },
    {
      icon: '💼',
      title: 'Digital Services',
      description: 'Comprehensive digital solutions for your needs.',
      moreInfo: `
        From app development to digital strategy, our digital services are designed to provide holistic solutions.
        - **Services Provided**: App development, website development, and digital strategy consulting.
        - **Technology Stack**: We utilize the latest tools and frameworks to deliver high-quality digital products.
        - **Success Stories**: Our digital solutions have transformed businesses and enhanced user engagement.
      `,
      link: '/AdvertisingServicesSection' // Unique link for Digital Services
    },
  ];

  return (
    <div className={styles.servicesWrapper}>
      <h1>SERVICES</h1>
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>Welcome to Our Services</h2>
        <p className={styles.introText}>
          At our agency, we are dedicated to providing top-notch services that cater to your unique needs. 
          Whether you are a startup looking for a digital presence or an established brand wanting to revamp your strategy, 
          our team of experts is here to help. We offer a wide range of services designed to elevate your brand and 
          engage your audience effectively.
        </p>
        <p className={styles.introText}>
          From creative advertising solutions to comprehensive digital marketing strategies, 
          our goal is to drive success for your business. Explore our services below and discover how we can 
          help you achieve your goals!
        </p>
      </div>
      
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description}
            moreInfo={service.moreInfo}
            link={service.link} // Pass the unique link to the ServiceCard
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
