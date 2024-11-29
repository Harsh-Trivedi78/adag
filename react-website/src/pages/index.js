import React from "react";
import { useEffect, useState } from "react";
import CookieBanner from './CookieBanner';
import Slider from "react-slick"; // Import the carousel
import { FaDesktop, FaPencilAlt, FaCogs, FaMobileAlt } from "react-icons/fa";
import '../App.css'; // Ensure this file contains modern styles
import '../pricing.css'; // Ensure to keep styling cohesive



const serviceImage1 = "https://straitwebsolutions.com/wp-content/uploads/2022/09/Web-Development-Services-768x377.jpg";
const serviceImage2 = "https://blr1.digitaloceanspaces.com/brandstory/assets_bslead/images/creative_marketing/creative-agency-hyd.jpg";
const serviceImage3 = "https://www.gniotgroup.edu.in/blog/wp-content/uploads/2024/07/core-components-digital-marketing.webp";
const serviceImage4 = "https://www.added.tech/assets/sitesfile/image/service/gal_635250570.jpg";
const serviceImage5 = "https://floatingchip.com/wp-content/uploads/2022/08/1.-Content-Marketing-Services-min-1.png";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  // Trigger animation when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility to true after a short delay
    }, 500); // Delay can be adjusted for effect

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  // Carousel settings for react-slick
  const settings = {
    dots: true,  // Enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of images to show at once
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section2">
  <div className="container">
    <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
      Boost Your Brand Visibility Online
    </h1>
    <p className="hero-subtitle">
      Partner with us to create innovative advertising strategies that drive results.
    </p>
    <a href="/Services" className="cta-button">Get Started</a>
   
  </div>
</section>


      {/* Introductory Content Section */}
      <section className="intro-section">
        <div className="container">
          <p className="intro-text">
            At <strong>Branding Boosters</strong>, we are dedicated to helping businesses enhance their online presence
            and grow their customer base. Our innovative strategies focus on delivering tailored solutions that align with
            your unique brand identity and business goals. Let us guide you in making the most of your digital advertising efforts!
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="services-title">Our Key Services</h2>
          <div className="features">
            <div className="feature">
              <FaDesktop className="icon" />
              <h3 className="feature-title">Web Development</h3>
              <p className="feature-text">
                Crafting beautiful, responsive websites that engage and convert visitors into customers.
              </p>
            </div>
            <div className="feature">
              <FaPencilAlt className="icon" />
              <h3 className="feature-title">Creative Advertising</h3>
              <p className="feature-text">
                Innovative campaigns tailored to meet your business goals and reach your target audience.
              </p>
            </div>
            <div className="feature">
              <FaCogs className="icon" />
              <h3 className="feature-title">Digital Marketing</h3>
              <p className="feature-text">
                From SEO to social media, we enhance your online presence and connect you with potential clients.
              </p>
            </div>
            <div className="feature">
              <FaMobileAlt className="icon" />
              <h3 className="feature-title">Branding</h3>
              <p className="feature-text">
                Establishing a strong brand identity that resonates with your audience and stands out in the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
  <div className="container">
    <h2 className="cards-title">Explore Our Services</h2>
    <div className="cards">
      
      {/* Web Development Card */}
      <div className="card">
        <div className="card-content">
          <h3>Web Development</h3>
          <p>Build responsive, high-performance websites designed to enhance user experience and drive business growth.</p>
          <a href="/WebDevelopmentSection" className="card-button">More Info</a>
        </div>
        <div className="card-image">
          <img src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" />
        </div>
      </div>

      {/* Business Consultancy Card */}
      <div className="card">
        <div className="card-content">
          <h3>Business Consultancy</h3>
          <p>Expert advice to help your business streamline operations, enhance strategies, and scale successfully.</p>
          <a href="/business-consultancy" className="card-button">More Info</a>
        </div>
        <div className="card-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTRxvvhXrJCU9HnT9tklY9wioJFyIdUtu8g&s" alt="Business Consultancy" />
        </div>
      </div>

      {/* Content Creation Card */}
      <div className="card">
        <div className="card-content">
          <h3>Content Creation</h3>
          <p>Create valuable, engaging content that drives traffic, informs, and converts your target audience.</p>
          <a href="/content-creation" className="card-button">More Info</a>
        </div>
        <div className="card-image">
          <img src="https://floatingchip.com/wp-content/uploads/2022/08/1.-Content-Marketing-Services-min-1.png" alt="Content Creation" />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h3>Creative Advertising</h3>
          <p>We develop creative advertising campaigns that resonate with your target audience. 
          Our strategies blend innovation with data-driven insights to maximize engagement and conversion</p>
          <a href="/content-creation" className="card-button">More Info</a>
        </div>
        <div className="card-image">
          <img src="https://www.collateral.co.in/upload/blogimage2/20200124103018340.jpg" alt="Content Creation" />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="explore-more-services">
        <div className="container">
          <h3>Discover More Services</h3>
          <p>Explore our full range of services tailored to elevate your brand.</p>
          <a href="/services" className="explore-more-button">Explore More Services</a>
        </div>
      </section>

      {/* Carousel Section (Service Images) */}
      {/* <section className="carousel-section">
        <div className="container">
          <h2 className="carousel-title">Our Recent Work</h2>
          <Slider {...settings}>
            <div>
              <img src={serviceImage1} alt="Service 1" className="carousel-image" />
            </div>
            <div>
              <img src={serviceImage2} alt="Service 2" className="carousel-image" />
            </div>
            <div>
              <img src={serviceImage3} alt="Service 3" className="carousel-image" />
            </div>
            <div>
              <img src={serviceImage4} alt="Service 4" className="carousel-image" />
            </div>
            <div>
              <img src={serviceImage5} alt="Service 5" className="carousel-image" />
            </div>
          </Slider>
        </div>
      </section> */}
      <CookieBanner />
    </div>
  );
};

export default HomePage;
