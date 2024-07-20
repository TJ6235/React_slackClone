import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar expand="lg" className="header-container">
      <Container fluid>
        <img src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png" alt="" height={'70px'}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navtexts ms-3 text-dark fw-bold' href="#action1">Features</Nav.Link>
            <Nav.Link className='fw-bold' href="#action2">Enterprice</Nav.Link>
            <Nav.Link className='navtexts ms-3 text-dark fw-bold' href="#action1">Solutions</Nav.Link>
            <Nav.Link className='fw-bold' href="#action2">Resources</Nav.Link>
          </Nav>
          <FontAwesomeIcon className='me-4' icon={faMagnifyingGlass} />
          <Nav.Link className='me-3 fw-bold' href="">Sign In</Nav.Link>
            <Button id='navBtn' className='btn p-2 shadow rounded'>TALK TO SALES</Button>
            <Button id='navBtn2' className='btn ms-4 p-2 shadow rounded'>GET STARTED</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
