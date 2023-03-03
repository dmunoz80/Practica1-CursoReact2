import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BarraNav() {

    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand>🍰Happy Cake</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="ms-auto">
                        <Link to="/" className='m-auto px-2 text-white text-decoration-none'>🏠Home</Link>
                        <Link to="/contacto" className='m-auto text-white text-decoration-none'>📒Contacto</Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default BarraNav