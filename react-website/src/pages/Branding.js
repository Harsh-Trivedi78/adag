// CreativeAdvertisingSection.js
import React from 'react';
import { FaBullhorn, FaChartLine, FaVideo, FaPaintBrush, FaUsers } from 'react-icons/fa';

const CreativeAdvertisingSection = () => {
  const content = [
    {
      title: 'Brand Identity Development',
      description: `Define and elevate your brand's unique voice. We help create a consistent identity that speaks directly to your target audience, building trust and recognition.`,
      icon: <FaBullhorn />,
    },
    {
      title: 'Targeted Campaign Strategy',
      description: `Precision in reach is key. Our campaigns are crafted to appeal to specific audience segments, optimizing both engagement and conversion potential.`,
      icon: <FaChartLine />,
    },
    {
      title: 'Engaging Video Content',
      description: `Bring your brand to life with powerful video storytelling. Our videos are designed to capture attention and evoke emotion, enhancing brand loyalty.`,
      icon: <FaVideo />,
    },
    {
      title: 'Creative Graphic Design',
      description: `We produce visually stunning graphics that highlight your brand’s values. Every design is tailored to leave a lasting impression and attract your audience's attention.`,
      icon: <FaPaintBrush />,
    },
    {
      title: 'Customer-Centric Approach',
      description: `Understanding customer needs is our priority. We align campaigns with consumer expectations, creating a personalized and memorable brand experience.`,
      icon: <FaUsers />,
    },
  ];

  const styles = {
    container: {
      padding: '4rem 1rem',
      marginTop: '7.5rem', // Creates space from navbar
      backgroundColor: '#f0f8ff',
      textAlign: 'center',
    },
    title: {
      fontSize: '7.5rem',
      color: '#005b96',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    aboutText: {
      fontSize: '1rem',
      color: '#333',
      lineHeight: '0.5',
      marginBottom: '1.5rem',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#005b96',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      justifyContent: 'center',
      marginTop: '2rem',
    },
    card: {
      width: '250px',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      textAlign: 'left',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
    },
    cardTitle: {
      fontSize: '1.3rem',
      color: '#005b96',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    cardDescription: {
      fontSize: '0.9rem',
      color: '#333',
      lineHeight: '1.4',
    },
    iconContainer: {
      fontSize: '2rem',
      color: '#005b96',
      marginBottom: '0.5rem',
    },
    buyNowContainer: {
      marginTop: '3rem',
      textAlign: 'center',
    },
    buyNowText: {
      fontSize: '1rem',
      color: '#333',
      marginBottom: '1rem',
    },
    buyNowButton: {
      padding: '0.8rem 1.5rem',
      backgroundColor: '#005b96',
      color: '#fff',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>BrandingServices</h1>
      <p style={styles.aboutText}>
        Our branding services are designed to elevate your business by focusing on impactful, strategic approaches. From identity building to engaging visuals, we’ll position your brand for growth and recognition.
      </p>
      <p style={styles.aboutText}>
        Partner with us to craft memorable campaigns that connect with your audience and enhance brand loyalty.
      </p>

      <h2 style={styles.sectionTitle}>Our Key Services</h2>
      <div style={styles.cardContainer}>
        {content.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconContainer}>{item.icon}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Buy Now Section */}
      <div style={styles.buyNowContainer}>
        <p style={styles.buyNowText}>
          Ready to enhance your brand’s presence? Let’s work together to bring your vision to life.
        </p>
        <a href="/PaymentGateway" style={styles.buyNowButton}>Start Your Branding Journey</a>
      </div>
    </div>
  );
};

export default CreativeAdvertisingSection;
