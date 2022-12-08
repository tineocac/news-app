import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MyNavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>NEWS APP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/purchases'}>Purchases</Nav.Link>
                    <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                    <Nav.Link >(sidebar)</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MyNavBar;