import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/icons/logow.webp';
import './mynavbar.style.css';

const MyNavbar = () => {
  return (
    <>
        <Navbar
        fixed="top"
        variant="dark"
        
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="programming"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
