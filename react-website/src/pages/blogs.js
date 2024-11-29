import React from 'react';
// import './App.css'; // Updated styles for modern design
import '../pricing.css'

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Flexible Pricing</h1>
        <nav className="breadcrumb">
          {/* <a href="/home" className="breadcrumb-link">Home</a> / <span className="breadcrumb-current">Our Work and Pricing Model</span> */}
        </nav>
      </header>

      {/* Services Section */}
      <section className="services">
        <div className="service-description">
          <h2 className="service-title"></h2>
          {/* <p className="service-text">
            Transforming Businesses with Innovative Strategies and Cutting-Edge Technology
          </p> */}
        </div>
        <div className="features">
          <div className="feature">
            <i className="icon">💡</i>
            <h3 className="feature-title">Flexible Pricing Plans</h3>
            <p className="feature-text">Choose a plan that fits your business needs, with transparent pricing and no hidden fees.</p>
          </div>
          <div className="feature">
            <i className="icon">🔒</i>
            <h3 className="feature-title">Secure Transactions</h3>
            <p className="feature-text">Rest assured that all transactions are secure and protected with the latest encryption technology.</p>
          </div>
          <div className="feature">
            <i className="icon">🛠️</i>
            <h3 className="feature-title">Dedicated Support</h3>
            <p className="feature-text">Get the help you need with our dedicated support team, available 24/7 to assist you.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2 className="pricing-title">No Hidden Charges. Choose Your Perfect Plan</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="pricing-card-title">Basic - Commission Based</h3>
            <h4 className="pricing-card-price">199$ Monthly</h4>
            <p className="pricing-card-subtitle">Includes:</p>
            <ul className="pricing-features">
              <li>1 target post per week</li>
              <li>Reading Advertisements</li>
              <li>Basic Customer Support</li>
              <li>Secure payment</li>
              <li>Cancel any time</li>
            </ul>
            <a href="PaymentGateway" className="cta-button">Buy Now</a>
          </div>
          <div className="pricing-card">
            <h3 className="pricing-card-title">Premium - Fee Based</h3>
            <h4 className="pricing-card-price">499$ Monthly</h4>
            <p className="pricing-card-subtitle">Includes:</p>
            <ul className="pricing-features">
              <li>4 target posts per week</li>
              <li>Creating, Planning, and Advertising</li>
              <li>24/7 Customer Support</li>
              <li>Secure payment</li>
              <li>Cancel any time</li>
            </ul>
            <a href="PaymentGateway" className="cta-button">Buy Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
