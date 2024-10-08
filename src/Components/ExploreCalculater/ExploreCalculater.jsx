import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './ExploreCalculater.css'


function ExploreCalculater() {
  return (
    <Container className="tools-section text-center py-5">
      <h2>Explore Tools & Calculator</h2>
      <Row className="justify-content-center mt-4">
        <Col md={3} sm={6} className="mb-3">
          <Card className="calculator-card">
            <Card.Body>
              <i className="icon sip-icon"></i>
              <Card.Title>SIP Calculator</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="calculator-card">
            <Card.Body>
              <i className="icon mutual-fund-icon"></i>
              <Card.Title>Mutual Fund Calculator</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="calculator-card">
            <Card.Body>
              <i className="icon lumpsum-icon"></i>
              <Card.Title>Lumpsum Calculator</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-3">
          <Card className="calculator-card">
            <Card.Body>
              <i className="icon fd-icon"></i>
              <Card.Title>FD Calculator</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <a href="#" className="view-all-link">View All Calculator &gt;</a>
    </Container>
  );
}

export default  ExploreCalculater;
