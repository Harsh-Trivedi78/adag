// components/Layout.js
import React from 'react';
import Footer from './Footer'; // Import Footer

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header can go here if needed */}
      <main>{children}</main> {/* Main content */}
      <Footer /> {/* Footer included on every page */}
    </div>
  );
};

export default Layout;
