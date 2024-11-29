// CookieBanner.js
import React, { useState, useEffect } from 'react';
import '../Cookieban.css';  // Make sure this path is correct

const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsBannerVisible(true);
    }
  }, []); // This effect runs only once, on component mount

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsBannerVisible(false); // Hide the banner after cookies are accepted
  };

  return (
    isBannerVisible && (  // Only render the banner if it's supposed to be visible
      <div className="cookie-banner">
        <p>
          We use cookies to improve your experience on our site. By accepting, you agree to our use of cookies.
        </p>
        <button className="accept-button" onClick={handleAcceptCookies}>
          Accept
        </button>
      </div>
    )
  );
};

export default CookieBanner;
