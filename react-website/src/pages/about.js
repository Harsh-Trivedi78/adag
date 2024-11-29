import React from 'react';
import { FaBullhorn, FaLightbulb, FaPencilRuler, FaLaptopCode, FaGoogle, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* About Us Intro Section */}
      <section className="about-intro">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          At <span className="highlight">Branding Boosters</span>, we are a full-service creative agency offering a comprehensive range of services to help businesses thrive in today's competitive market.
        </p>
      </section>

      {/* Original Services Section */}
      <section className="about-services">
        <div className="service">
          <FaBullhorn className="service-icon" />
          <h2>Advertising Services</h2>
          <p>We create innovative advertising campaigns and oversee their entire rollout, from initial market research to final execution, ensuring impactful results for your business.</p>
        </div>
        <div className="service">
          <FaLightbulb className="service-icon" />
          <h2>Consulting Services</h2>
          <p>Our consulting services provide insights into new markets, product strategies, cost reduction techniques, and more to help your business grow sustainably.</p>
        </div>
        <div className="service">
          <FaPencilRuler className="service-icon" />
          <h2>Design Services</h2>
          <p>We help you develop a unique brand identity through stunning logos and promotional materials that ensure your business stands out in the market.</p>
        </div>
        <div className="service">
          <FaLaptopCode className="service-icon" />
          <h2>Digital Services</h2>
          <p>Enhance your digital presence with our web development, app creation, and IT services, ensuring your business stays ahead in the digital age.</p>
        </div>
      </section>

      {/* New Key Ad Platforms Section */}
      <section className="ad-platforms">
        <h2 className="ad-platforms-title">Key Ad Platforms to Consider</h2>
        <p className="ad-platforms-description">
          Choosing the right advertising platform can significantly impact your marketing effectiveness. Here are some of the leading ad platforms that cater to various business needs, audiences, and content types.
        </p>
        
        <div className="platform-cards">
          <div className="service">
            <FaGoogle className="service-icon" />
            <h3>Google Ads</h3>
            <p>For search, display, video, and app ads across the Google network, helping you reach a vast audience effectively.</p>
          </div>
          <div className="service">
            <FaFacebook className="service-icon" />
            <h3>Facebook & Instagram Ads</h3>
            <p>Target ads based on demographics, interests, and behavior, ensuring your brand reaches the right audience.</p>
          </div>
          <div className="service">
            <FaLinkedin className="service-icon" />
            <h3>LinkedIn Ads</h3>
            <p>Perfect for B2B and professional-focused advertisements to engage and convert a professional audience.</p>
          </div>
          <div className="service">
            <FaTwitter className="service-icon" />
            <h3>Twitter Ads</h3>
            <p>Engage in real-time with promoted tweets that spark conversation and drive brand awareness.</p>
          </div>
          <div className="service">
            <FaYoutube className="service-icon" />
            <h3>YouTube Ads</h3>
            <p>Video-based ads targeting various demographics and interests, bringing your message to life on the YouTube platform.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="about-footer">
        <p>At <span className="highlight">Branding Boosters</span>, we take a collaborative approach, working closely with agency producers, creative directors, and production teams to align every project with your brand's vision.</p>
        <p>Whether you're a small business or a large corporation, we're ready to help you succeed.</p>
        <a href="/contact" className="cta-link">
          <button className="cta-button">Contact Us</button>
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
