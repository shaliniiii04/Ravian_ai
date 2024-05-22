import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components for the navbar elements
const Nav = styled.nav`
  background-color: #46703b;
  padding: 10px 54px 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex; 
  gap: 70px; /* Space between links */
  align-items: center;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: #F5F5DC;
  text-decoration: none; 
  font-weight: bold; 
  font-size: 20px;
  &:hover{
    background-color: transparent; 
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <li><StyledLink to="/home">Home</StyledLink></li>
        <li><StyledLink to="/about">About</StyledLink></li>
        <li><StyledLink to="/contact">Contact</StyledLink></li>
      
      <li><StyledLink to="/" >Login / Signup</StyledLink></li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
