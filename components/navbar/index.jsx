import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="header-bg mb-5">
      <Container>
        <Navbar.Brand className="primary-header">Wookie Movies</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
