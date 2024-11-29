import React from 'react';

const DesignServicesComponent = () => {
  return (
    <div style={{
      backgroundColor: '#f7fafc',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '4rem' // Adjust this value to ensure it displays below the navbar
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#d97706',
        marginBottom: '1rem'
      }}>
        Creative Design Services
      </h2>

      <p style={{
        color: '#4a5568',
        marginBottom: '1rem'
      }}>
        Our design team brings your brand to life with visually engaging and effective solutions. From logo design to 
        full-scale brand identity, we focus on delivering designs that captivate and communicate your vision.
      </p>

      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#f59e0b',
        marginBottom: '0.5rem'
      }}>
        Our Services
      </h3>

      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '1.25rem',
        color: '#4a5568',
        marginBottom: '1rem'
      }}>
        <li>Logo and Brand Identity</li>
        <li>Website and App Design</li>
        <li>Marketing Collateral</li>
        <li>Product Packaging</li>
        <li>Social Media Content Creation</li>
      </ul>

      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#f59e0b',
        marginBottom: '0.5rem'
      }}>
        Why Work with Us?
      </h3>

      <p style={{
        color: '#4a5568',
        marginBottom: '1rem'
      }}>
        We’re passionate about design that not only looks good but also achieves results. With a focus on aesthetics 
        and functionality, we ensure your brand stands out in a competitive market and connects with your target audience.
      </p>

      <button style={{
        backgroundColor: '#d97706',
        color: '#ffffff',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#b45309'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#d97706'}>
        Get a Custom Design Quote
      </button>
    </div>
  );
};

export default DesignServicesComponent;
