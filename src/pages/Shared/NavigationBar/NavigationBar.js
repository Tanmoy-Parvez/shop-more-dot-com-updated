import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png'

const NavigationBar = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top "
                    />{' '}
                    <span className="text-white fw-bold">SHOP MORE.COM</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center nav-items">
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/allProducts">products</Link>
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#services" className="hashLink">
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#reviews" className="hashLink">
                            Reviews
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#about" className="hashLink">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#blogs" className="hashLink">
                            Blogs
                        </Nav.Link>
                        {!user?.email ? <Nav.Link>
                            <Link to="/signIn">Login</Link>
                        </Nav.Link>
                            :
                            <Nav>
                                <Nav.Link>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/" className="fw-bold">{user?.displayName}</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <button onClick={logOut} className="btn btn-outline-none p-0 text-white">
                                        <i className="fas fa-sign-out-alt"></i>  Logout
                                    </button>
                                </Nav.Link>
                            </Nav>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;