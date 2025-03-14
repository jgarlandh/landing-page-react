import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          {/* Logo o marca alineado a la izquierda */}
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>

          {/* Botón de toggle para dispositivos móviles */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Contenedor colapsable para los elementos de navegación */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav con ms-auto para alinear a la derecha */}
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
