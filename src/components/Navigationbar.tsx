import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigationbar = () => {
  return (
    <Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark" >
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto" >
          <NavLink to="/" eventKey="1" as={Link}>
            Home
          </NavLink>
          <NavLink to="/about" eventKey="2" as={Link}>
            About
          </NavLink>
          <NavLink to="/contact" eventKey="3" as={Link}>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse> 
    </Navbar>
  );
};

export default Navigationbar;
