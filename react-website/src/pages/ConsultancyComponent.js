import React from 'react';

const ConsultancyComponent = () => {
  return (
    <div style={{
      backgroundColor: '#f7fafc',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '4rem' // Adjust this value based on your navbar's height
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#2563eb',
        marginBottom: '1rem'
      }}>
        Business Consultancy Services
      </h2>

      <p style={{
        color: '#4a5568',
        marginBottom: '1rem'
      }}>
        Our consultancy firm is dedicated to guiding businesses toward sustainable growth and strategic success.
        With a team of seasoned experts, we offer tailored solutions in strategy, management, and market entry.
      </p>

      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#3b82f6',
        marginBottom: '0.5rem'
      }}>
        Our Expertise
      </h3>

      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '1.25rem',
        color: '#4a5568',
        marginBottom: '1rem'
      }}>
        <li>Market Analysis and Strategy</li>
        <li>Business Process Optimization</li>
        <li>Financial Planning and Budgeting</li>
        <li>Brand Positioning and Market Entry</li>
      </ul>

      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#3b82f6',
        marginBottom: '0.5rem'
      }}>
        Why Choose Us?
      </h3>

      <p style={{
        color: '#4a5568',
        marginBottom: '1rem'
      }}>
        Partnering with us means more than just business advice—it’s a collaboration aimed at building resilience 
        and driving growth. We bring industry insights, innovative frameworks, and a commitment to your success.
      </p>

      <button style={{
        backgroundColor: '#2563eb',
        color: '#ffffff',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#1e40af'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}>
        Book a Free Consultation
      </button>
    </div>
  );
};

export default ConsultancyComponent;
