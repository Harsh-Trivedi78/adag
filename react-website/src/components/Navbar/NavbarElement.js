import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from './UserContext';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
// import '..//..//App.css'
// Logo component
const Logo = () => (
  <img
    src={require('file:///D:/megakit-bootstrap-main/frontend/favicon/android-chrome-192x192.png')}
    alt="Branding Boosters"
    style={{ width: '16px', height: '16px', marginRight: 5 }}
  />
);

// Icon component
/* Nav component */
/* Nav component */
/* Nav component */
export const Nav = styled.nav`
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); /* Cool gradient */
  height: 85px; /* Slightly increased height */
  width: 80%; /* Shrink the width and center it */
  margin: 0 auto; /* Center the navbar horizontally */
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  border-radius: 30px; /* More rounded edges */
  align-items: center; /* Vertically center items */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  z-index: 12; /* Ensure it sits above other content */
  position: fixed; /* Fixed position for scrolling */
  top: 20px; /* Add a little space from the top */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust to align with center */
`;


/* NavLink component */
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  font-size: 1.2rem; /* Slightly larger font size for bigger height */

  &:hover {
    color: #d1c4e9; /* Lighter color on hover */
  }

  &.active {
    color: #ffcc80; /* Active state color */
  }
`;

/* Bars component (for mobile view) */
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

/* NavMenu component */
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 12rem;
  background: #444; /* Darker background for contrast */
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  display: ${props => (props.$isOpen ? "block" : "none")};
  z-index: 100;
  transition: opacity 0.3s ease, visibility 0.3s ease; /* Add transition for smooth appearance */
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')}; /* Manage visibility for accessibility */
`;

/* DropdownItem component */
export const DropdownItem = styled(Link)`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease-in-out, padding-left 0.2s ease-in-out; /* Added padding effect */

  &:hover {
    background-color: #555; /* Slightly lighter on hover */
    color: #ffcc80; /* Change color on hover */
    padding-left: 1.5rem; /* Indicate hover with padding shift */
  }
`;
/* Icon component */
const Icon = styled.div`
  width: 18px; /* Slightly larger icon size */
  height: 18px;
  border-radius: 50%;
  background-color: #ffcc80;
  box-shadow: 0 0 10px rgba(255, 204, 128, 0.5);
  margin-right: 10px;
`;


// Navbar component
const Navbar = () => {
  const { loggedInUser , handleLogin, handleLogout } = useContext(UserContext);
  const [isOpen, setIsOpen, setUserName] = useState(false);
  // useEffect(() => {
  //   const name = localStorage.getItem('loggedInUser');
  //   if (name) setUserName(name);
  // }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      
      <NavLink to="/home">
        <Logo />
        Branding Boosters
      </NavLink>
      <NavMenu>
        <NavLink to="/home">
          <Icon />
          Home
        </NavLink>
        <NavLink to="/about">
          <Icon />
          About
        </NavLink>
        <NavLink to="/contact">
          <Icon />
          Contact Us
        </NavLink>
        <NavLink to="/Services">
          <Icon />
          Services
        </NavLink>
        <NavLink to="/blogs">
          <Icon />
          Pricing
        </NavLink>
        {loggedInUser ? (
  <div>
    <NavLink to="/profile">
      <FontAwesomeIcon icon={faUser} style={{ marginRight: 5 }} />
      Welcome, {loggedInUser}!
    </NavLink>
    <NavLink to="/login" onClick={handleLogout}>
      Logout
    </NavLink>
  </div>
) : (
  <NavLink to="" onClick={toggleDropdown}>
    Sign Up
    <span className="caret">▼</span>
  </NavLink>
)}

<DropdownContainer $isOpen={isOpen}>
  {loggedInUser ? (
    <DropdownItem to="/login" onClick={handleLogout}>
      Logout
    </DropdownItem>
  ) : (
    <>
      <DropdownItem to="/sign-up">
        Sign Up
      </DropdownItem>
      <DropdownItem to="/login">
        Login
      </DropdownItem>
    </>
  )}
</DropdownContainer>
        
      </NavMenu>
    
    </Nav>
  );
};

export default Navbar;