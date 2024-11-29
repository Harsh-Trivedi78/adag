// CreativeAdvertisingSection.js
import React from 'react';
import { FaBullhorn, FaChartLine, FaVideo, FaPaintBrush, FaUsers } from 'react-icons/fa';
import '../creativeAd.css'; // Import custom CSS if needed
// import '../App.css'; // Import custom CSS

const CreativeAdvertisingSection = () => {
  const content = [
    {
      title: 'Brand Awareness Campaigns',
      description: `Brand awareness campaigns aim to establish and reinforce your brand's presence in the market. 
      These campaigns use visually engaging and memorable content to help your audience connect with your brand.`,
      icon: <FaBullhorn className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgurOfmVpxTSAuDR1oGIPwwjIbpLUgEWg0Dw&s', // Replace with actual images
    },
    {
      title: 'Performance Marketing',
      description: `Performance marketing campaigns focus on measurable results. Using data-driven strategies, 
      we optimize ad placements and adjust content to improve conversion rates and maximize ROI for your business.`,
      icon: <FaChartLine className="icon" />,
      image: 'https://media.licdn.com/dms/image/D4D12AQHGRvxtLtUufg/article-cover_image-shrink_600_2000/0/1709730782036?e=2147483647&v=beta&t=HEotPjsLUVaWUVCvnjaHgBF4QQQBgRrs57PRe2-B1Jc',
    },
    {
      title: 'Video Advertising',
      description: `Video advertising brings stories to life, engaging audiences with dynamic visuals and compelling storytelling. 
      We produce high-quality video content that resonates with viewers and strengthens your brand’s message.`,
      icon: <FaVideo className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9mBYovCGniMotPj8mahtM920-BDffCsyBA&s',
    },
    {
      title: 'Creative Design',
      description: `Our creative team crafts unique, eye-catching designs that capture attention. From digital to print, 
      we make sure that every ad aligns with your brand's identity and stands out in a crowded marketplace.`,
      icon: <FaPaintBrush className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSSEijxWi6kAPNjYb6UysxWYoROBgq5vbQw&s',
    },
    {
      title: 'Audience Targeting',
      description: `By understanding audience demographics, interests, and behaviors, we create tailored advertising strategies 
      that reach the right people at the right time, maximizing impact and improving campaign effectiveness.`,
      icon: <FaUsers className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-TwmtDK2Uh0MiAi9vJjPSRVHw-kPu33ZNw&s',
    },
  ];

  return (
    <div className="creative-advertising-section">
      <div className="about-section">
        <h1 className="about-title">Creative Advertising Services</h1>
        <p className="about-description">
          Our agency offers a range of creative advertising solutions to boost your brand visibility. 
          We specialize in creating visually compelling campaigns that engage audiences and drive results. 
          Whether you’re looking for a brand lift or targeted ad placements, we’re here to elevate your message.
        </p>
        <p className="about-description">
          With a focus on performance, creativity, and user engagement, our campaigns are crafted to make a lasting impact. 
          Partner with us to turn your advertising vision into reality.
        </p>
      </div>
      <h2 className="section-title">Advertising Insights</h2>
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

      {/* Buy Now Section */}
      <div className="buy-now-container">
        <p className="buy-now-text">
          Ready to transform your brand with innovative advertising solutions? Let’s create an impactful campaign together!
        </p>
        <a href="/PaymentGateway" className="buy-now-button">Start Your Campaign Today</a>
      </div>
    </div>
  );
};

export default CreativeAdvertisingSection;
