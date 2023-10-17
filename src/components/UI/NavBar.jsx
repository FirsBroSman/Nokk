import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandlers = async (e) => {
    e.preventDefault();
    const response = await axios.post('api/auth/logout');
    if (response.status === 200) window.location = '/';
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {user ? (
          <>
            <Navbar.Brand href="/" style={{ color: '#FFC618' }}>Nook</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/routs/add" style={{ color: '#FFC618' }}>ADD Nook</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/routs/all" style={{ color: '#FFC618' }}>MY Nook</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link onClick={logoutHandlers} href="/" style={{ color: '#FFC618' }}>BYE!</Nav.Link>
            </Nav>
          </>
        ) : (
          <Nav className="mr-auto">
            <Nav.Link href="/auth/signup" style={{ color: '#FFC618' }}>CHECK-IN</Nav.Link>
            <Nav.Link href="/auth/login" style={{ color: '#FFC618' }}>LOG ON</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
