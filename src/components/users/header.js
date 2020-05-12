import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import {Link} from 'react-router-dom'

const Header=()=>{

    return (
        <div className="row">
            <div className="col-lg-12">



                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Companions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Link to="/">
                                <Nav className="nav-link">Home</Nav>
                            </Link>
                            <Link to="/Contact">
                                <Nav className="nav-link">Contact us</Nav>
                            </Link>

                            <NavDropdown title="Females" id="basic-nav-dropdown">

                                <Link to="/females">
                                    <Nav.Item className="dropdown-item">List of Ladies</Nav.Item>
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/females/create">

                                    <Nav.Item className="dropdown-item">Register new female</Nav.Item>

                                </Link>
                            </NavDropdown>

                            <NavDropdown title="Males" id="basic-nav-dropdown">
                                <Link to="/males/">

                                    <Nav.Item className="dropdown-item">List of Men</Nav.Item>

                                </Link>
                                <NavDropdown.Divider />

                                <Link to="/male/create">

                                    <Nav.Item className="dropdown-item">Register new male</Nav.Item>

                                </Link>

                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </div>
        </div>
    )
}

export default Header