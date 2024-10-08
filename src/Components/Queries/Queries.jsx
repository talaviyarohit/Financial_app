import React from 'react'
import { Container, Button } from 'react-bootstrap';
import './Queries.css'

function Queries() {
  return (
    <Container className="info-section py-5">
      {/* First Section */}
      <div className="info-block mb-5 text-center">
        <h3>Still have queries?</h3>
        <p>Browse a wide range content from Q&A & Help section.</p>
        <Button variant="outline-success" className="rounded-pill px-4">
          Go to Help &gt;
        </Button>
      </div>

      {/* Second Section */}
      <div className="info-block text-center">
        <h3>Don't miss out on your latest digest</h3>
        <p>
          Subscribe to get newsletter/recent content, expert tips & premium content directly to your inbox
        </p>
        <Button variant="outline-success" className="rounded-pill px-4">
          Subscribe Now
        </Button>
      </div>
    </Container>
  )
}

export default Queries
