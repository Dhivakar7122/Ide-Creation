import React, { useState } from 'react';
import { Container, Nav, Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../cssfile/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import IDA from '../img/IDA.png';
import ContactForm from './Contactform'; // Adjust the import path based on your actual file structure
import CareerForm from './Career'; // Adjust the import path based on your actual file structure

function NavbarComponent() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showCareerForm, setShowCareerForm] = useState(false);

    const handleCloseContact = () => setShowContactForm(false);
    const handleShowContact = () => setShowContactForm(true);

    const handleCloseCareer = () => setShowCareerForm(false);
    const handleShowCareer = () => setShowCareerForm(true);

    return (
        <section className="navbar-shadow sticky-top">
            <Container>
                <nav className="navbar navbar-expand-lg py-2">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={IDA} alt="Logo" width="60" height="48" className="d-inline-block align-text-top" />
                        </a>
                        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start sidebar" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    <img src={IDA} alt="Logo" width="60" height="48" className="d-inline-block align-text-top" />
                                </h5>
                                <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <Nav className="flex-row">
                                    <div className="border-bottom"></div>
                                    <Nav.Item>
                                        <Nav.Link href="index.html" className="nav-link" aria-current="page">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#our-clients" className="nav-link">Clients</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#careers" className="nav-link" onClick={handleShowCareer}>Careers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#contact-us" className="nav-link contact-us" onClick={handleShowContact}>Contact Us</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
            <ContactForm show={showContactForm} handleClose={handleCloseContact} />
            <CareerForm show={showCareerForm} handleClose={handleCloseCareer} />
        </section>
    );
}

export default NavbarComponent;
