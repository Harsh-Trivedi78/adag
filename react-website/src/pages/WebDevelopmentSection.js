// WebDevelopmentSection.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import '../wds.css'; // Importing custom CSS
import '../App.css'; // Importing custom CSS

const WebDevelopmentSection = () => {
  const content = [
    {
      title: 'Frontend Development',
      description: `Frontend development involves creating the visual and interactive elements of a website. 
      Developers work with HTML for structure, CSS for styling, and JavaScript for dynamic functionality. 
      This layer focuses on delivering a seamless user experience by ensuring that all visual components of the website 
      are intuitive, responsive, and visually appealing. Mastering frontend development is essential for crafting modern web applications.`,
      icon: <FaHtml5 className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDj_Jte66ChYX7oKfzFnIRDgd9GkB3EqbBg&s',
    },
    {
      title: 'Backend Development',
      description: `Backend development focuses on building the server-side logic that powers applications. 
      This includes working with databases, APIs, and ensuring the security and scalability of web apps. 
      Back-end developers use technologies like Node.js, Python, or Ruby on Rails to ensure that the data 
      requested by users is fetched, processed, and returned to the front end efficiently. Without backend development, 
      web applications would be unable to handle data and real-time functionality.`,
      icon: <FaNodeJs className="icon" />,
      image: 'https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg',
    },
    {
      title: 'React Framework',
      description: `React is a powerful JavaScript library for building user interfaces, specifically single-page applications (SPAs). 
      Its component-based architecture allows developers to build reusable UI elements, making development efficient. 
      React’s virtual DOM optimizes updates, leading to fast rendering performance. Whether you’re creating simple websites 
      or complex web apps, React provides a structured and scalable approach to frontend development.`,
      icon: <FaReact className="icon" />,
      image: 'https://www.angularminds.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fangularminds.com%2Fblog%2Fcover%2Fwhy-use-react-for-web-development-20240613095204378.jpg&w=1920&q=75',
    },
    {
      title: 'Databases',
      description: `Databases form the backbone of most web applications. Whether you’re using SQL databases like MySQL, PostgreSQL, 
      or NoSQL databases like MongoDB, efficient data management is critical. Web developers need to understand how to structure, 
      query, and manage databases to ensure that information is stored and retrieved in the most optimal way. 
      Good database design is essential for scalability, security, and performance.`,
      icon: <FaDatabase className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgeL-h9orNjnGD9YE9Sxc7Lbw42DDdeCWaQ&s',
    },
    {
      title: 'CSS for Styling',
      description: `CSS (Cascading Style Sheets) is essential for designing the look and feel of a web application. 
      With CSS, developers can define layouts, colors, fonts, and animations. Modern CSS, along with frameworks like 
      Flexbox and Grid, allows developers to create complex, responsive layouts that adjust seamlessly across devices. 
      Additionally, CSS pre-processors like SASS or LESS enhance the ability to create modular, reusable styles.`,
      icon: <FaCss3Alt className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLep9z0UfksG6vzbivKdgNHUpuuvA0Sdvlw&s',
    },
  ];

  return (
    <div className="web-development-section">
      <div className="about-section">
        <h1 className="about-title">Web Development Service</h1>
        <p className="about-description">
          At our agency, we provide end-to-end web development services to elevate your brand's online presence. 
          From designing beautiful, interactive frontend experiences to building powerful backend infrastructures, 
          we have the expertise to deliver results. Whether you're looking to create a stunning website, 
          develop custom applications, or optimize your digital advertising strategies, we’re here to help you achieve success.
        </p>
        <p className="about-description">
          Our comprehensive approach ensures that every project is delivered with a focus on innovation, 
          performance, and user experience. Let us be your partner in bringing your digital vision to life.
        </p>
      </div>
      <h2 className="section-title">Web Development Insights</h2>
      <div className="card-container">
        {content.map((item, index) => (
          <div key={index} className="card">
            <div className="icon-container">{item.icon}</div>
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Buy Now Button Section */}
      <div className="buy-now-container">
  <p className="buy-now-text">
    Unlock the power of a professional web presence! Let us build a stunning, responsive website that attracts and retains customers, helping you stand out in today’s digital world.
  </p>
  <a href="/PaymentGateway" className="buy-now-button">Get Started with Your Website Today</a>
</div>

    </div>
  );
};

export default WebDevelopmentSection;
