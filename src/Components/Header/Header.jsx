import 'bootstrap/dist/css/bootstrap.min.css';
// Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Header.css'; // Import your custom CSS for further styling
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          
          ET Money
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/bloggrid'} className='pr-a'>Learn</Link>
            
            
            <Link to={'/expensechart'} className='pr-a'>Graph</Link>
            {/* <Link to={'/addevent'} className='pr-a'>Add Payment</Link> */}
            <Link to={'/expenseform'} className='pr-a'>Payment</Link>
            <Link to={'/list'} className='pr-a'>List</Link>
            <Link to={'/expensefilterlist'} className='pr-a'>Filter</Link>
            {/* <NavDropdown title="More" id="more-dropdown">
              <NavDropdown.Item href="#more-1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#more-2">Option 2</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link to={'/registerPage'} className='pr-a'>
              <i className="fas fa-user-circle"></i> My Account
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
