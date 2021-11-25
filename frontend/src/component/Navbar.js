import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import './index.css'
const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">

  <ReactBootStrap.Navbar.Brand href="#home">THE BONG STORE</ReactBootStrap.Navbar.Brand>

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/home">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
    </Link>


    <Link to="/shop">
    <ReactBootStrap.Nav.Link href="#shop">Shop</ReactBootStrap.Nav.Link>
    </Link>


    <Link to="/service">
    <ReactBootStrap.Nav.Link href="#service">Service</ReactBootStrap.Nav.Link>
    </Link>


    <Link to="/about">
    <ReactBootStrap.Nav.Link href="#about">About</ReactBootStrap.Nav.Link>
    </Link>


    <Link to="/contact">
    <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link>
    </Link>



    <Link to="/">
    <ReactBootStrap.Nav.Link href="#login">Login</ReactBootStrap.Nav.Link>
    </Link>



    <Link to="/register">
    <ReactBootStrap.Nav.Link href="#register">Register</ReactBootStrap.Nav.Link>
    </Link>


    </ReactBootStrap.Nav>



  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;