import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import LoginBtn from "./buttons/LoginBtn";
import SignupBtn from "./buttons/SignupBtn";
import CartBtn from "./buttons/CartBtn";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand fw-bold" to="/">
          Brand.
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <LoginBtn />
          <SignupBtn />
          <CartBtn />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
