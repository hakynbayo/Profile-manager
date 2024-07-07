// src/components/Navbar.js

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dtech from "../assets/D-tech.png";

// Styled component for the navigation bar container
const NavbarContainer = styled.div`
  width: 100%;
  background-color: #007bff; // Blue background
  display: flex;
  justify-content: space-between; // Space between logo and dropdown
  align-items: center;
  padding: 1rem 2rem; // Padding around content
  box-sizing: border-box;
`;

// Styled component for the logo section
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff; // White text color
`;

// Styled component for the dropdown container
const DropdownContainer = styled.div`
  position: relative; // Position relative for the dropdown menu
`;

// Styled component for the dropdown icon
const DropdownIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff; // White background
  border-radius: 50%; // Circular icon
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; // Pointer cursor on hover

  &:after {
    content: "⋮"; // Vertical ellipsis icon
    font-size: 24px;
    color: #007bff; // Blue color for the icon
  }
`;

// Styled component for the dropdown menu
const DropdownMenu = styled.div`
  position: absolute;
  top: 50px; // Positioned below the dropdown icon
  right: 0;
  background-color: #fff; // White background
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Shadow effect
  border-radius: 6px;
  display: ${({ isOpen }) =>
    isOpen ? "block" : "none"}; // Conditional display based on isOpen state
`;

// Styled component for each item in the dropdown menu
const DropdownItem = styled.div`
  width: 100%;
  white-space: nowrap; // Prevent text from wrapping
  padding: 10px 20px; // Padding around the item
  cursor: pointer; // Pointer cursor on hover
  background-color: #fff; // White background
  color: #007bff; // Blue text color
  border-radius: 5px; // Rounded corners
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Shadow effect

  &:hover {
    background-color: #f0f0f0; // Light gray background on hover
  }
`;

// Navbar component definition
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown menu visibility
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Toggle the dropdown menu open/closed
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Navigate to the profile page
  const handleEditProfile = () => {
    navigate("/profile");
  };

  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">
          <img src={Dtech} alt="logo" /> {/* Display logo image */}
        </Link>
      </Logo>
      <DropdownContainer>
        <DropdownIcon onClick={toggleDropdown} />{" "}
        {/* Toggle dropdown on click */}
        <DropdownMenu isOpen={isOpen}>
          <DropdownItem onClick={handleEditProfile}>
            Profile Manager {/* Dropdown item to navigate to profile manager */}
          </DropdownItem>
        </DropdownMenu>
      </DropdownContainer>
    </NavbarContainer>
  );
};

export default Navbar;
