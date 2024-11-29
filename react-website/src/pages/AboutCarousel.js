import React from 'react';
import Slider from 'react-slick';
import '../AboutCarousel.css'; // CSS file for carousel

const carouselData = [
  {
    title: 'Cost Tracking and Analysis',
    description: 'Get precise figures regarding ad expenditure and insights into optimal distribution strategies for any budget.',
  },
  {
    title: 'Fee Structures and Commission Rates',
    description: 'Transparent pricing based on services provided, ensuring value in relation to marketing scope and strategies.',
  },
  {
    title: 'Seamless Coordination',
    description: 'Efficient management of ad details, costs, and platform selection tailored to each campaign’s needs.',
  },
  {
    title: 'Extensive Branding Solutions',
    description: 'Comprehensive marketing and branding solutions with the perspective of an outside agency to enhance ad effectiveness.',
  },
  {
    title: 'Collaborative Strategy',
    description: 'Partnering with clients on a strategic level to align ad plans with unique business goals.',
  }
];

const AboutCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="carousel-container">
      {carouselData.map((item, index) => (
        <div key={index} className="carousel-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default AboutCarousel;
