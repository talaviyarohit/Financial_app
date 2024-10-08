import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';  // For custom CSS

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-4 pb-2">
      <Container>
        <Row>
          {/* Tools & Calculators Section */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Tools & Calculators</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">NPS Calculator</a></li>
              <li><a href="#!" className="text-light">SIP Calculator</a></li>
              <li><a href="#!" className="text-light">Income Tax Calculator</a></li>
              <li><a href="#!" className="text-light">HRA Calculator</a></li>
            </ul>
          </Col>

          {/* More Sections */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Income Tax Saving Schemes</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">Public Provident Fund</a></li>
              <li><a href="#!" className="text-light">Sukanya Samriddhi Yojana</a></li>
            </ul>
          </Col>

          {/* Explore Section */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">Mutual Funds</a></li>
              <li><a href="#!" className="text-light">NPS</a></li>
              <li><a href="#!" className="text-light">Fixed Deposits</a></li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">Credit Score</a></li>
              <li><a href="#!" className="text-light">Tax Saving FD</a></li>
              <li><a href="#!" className="text-light">Tools & Calculators</a></li>
            </ul>
          </Col>
        </Row>
        
        {/* Footer Bottom */}
        <Row className="mt-3">
          <Col md={6}>
            <p>©Copyright 2024 etmoney.com All Rights Reserved</p>
          </Col>
          <Col md={6} className="text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#!" className="text-light">About Us</a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-light">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-light">Terms & Conditions</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
