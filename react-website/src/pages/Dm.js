import React from 'react';
import { FaSearch, FaGlobe, FaChartBar, FaEnvelope, FaThumbsUp } from 'react-icons/fa';
import '../digitalMarketing.css'; // Import custom CSS for Digital Marketing

const DigitalMarketingSection = () => {
  const content = [
    {
      title: 'SEO Optimization',
      description: `SEO optimization involves enhancing your website’s visibility on search engines, ensuring that your content reaches 
      the right audience. We implement effective strategies to improve organic traffic and boost your search rankings.`,
      icon: <FaSearch className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXnR8WCIsjTru9vQps3ht2HOESEfcGZAI_w&s', // Replace with actual images
    },
    {
      title: 'Social Media Marketing',
      description: `Social media marketing leverages platforms like Facebook, Instagram, and Twitter to engage with your audience. 
      Our team crafts tailored campaigns that foster community interaction and promote your brand effectively.`,
      icon: <FaGlobe className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYPCGfX2g4nPUo-jIWj0TMDYj6Lw0tT1ykQ&s',
    },
    {
      title: 'Email Marketing',
      description: `Email marketing remains one of the most effective strategies for reaching potential customers. We design 
      personalized email campaigns that drive engagement and conversion.`,
      icon: <FaEnvelope className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRqosOWqAlg8r5PoLv7cO4-XEmPd1BFE7cg&s',
    },
    {
      title: 'PPC Advertising',
      description: `Pay-per-click advertising allows you to drive targeted traffic to your website quickly. We create optimized 
      campaigns that maximize your ROI through strategic bidding and ad placement.`,
      icon: <FaChartBar className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgpnvQbVGr0OcnfnOnqtbXCRhMmuis-cj4A&s',
    },
    {
      title: 'Content Marketing',
      description: `Content marketing focuses on creating valuable content to attract and engage your audience. We develop 
      compelling articles, videos, and infographics that resonate with your target market and enhance your brand's authority.`,
      icon: <FaThumbsUp className="icon" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsRRtCVlfwSyhwSV4cNJ1JKfzvZQI91CTqg&s',
    },
  ];

  return (
    <div className="digital-marketing-section">
      <div className="about-section">
        <h1 className="about-title">Digital Marketing Services</h1>
        <p className="about-description">
          Our agency offers a comprehensive suite of digital marketing solutions to elevate your brand's online presence. 
          We specialize in strategies that drive traffic, generate leads, and convert customers.
        </p>
        <p className="about-description">
          With an emphasis on data-driven results, we tailor our campaigns to meet your specific goals and maximize your ROI. 
          Partner with us to enhance your digital marketing efforts.
        </p>
      </div>
      <h2 className="section-title">Digital Marketing Insights</h2>
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
          Ready to elevate your online presence with expert digital marketing? Let's build a successful strategy together!
        </p>
        <a href="/PaymentGateway" className="buy-now-button">Start Your Digital Journey Today</a>
      </div>
    </div>
  );
};

export default DigitalMarketingSection;
