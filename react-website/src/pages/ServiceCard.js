// ServiceCard.js
import React from 'react';
import styles from '../servcard.module.css'; // Adjust the import as per your file structure

const ServiceCard = ({ icon, title, description, moreInfo, link }) => {
  
  const handleClick = (e) => {
    // Uncomment below if you want to prevent default link action for testing
    // e.preventDefault(); 
    // alert(moreInfo); // You can replace this with modal handling if needed
  };

  return (
    <div className={styles.serviceCard}>
      <div className={styles.cardContent}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a href={link} onClick={handleClick} className={styles.toggleButton}>
        More Info &gt; {/* Use &gt; to avoid errors */}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
